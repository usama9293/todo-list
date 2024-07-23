// src/redux/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { addTodo, updateTodo, deleteTodo, getTodos } from '../firebase/firebaseService';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    setTodos: (state, action) => {
      state.items = action.payload;
    },
    addTodoSuccess: (state, action) => {
      state.items.push(action.payload);
    },
    updateTodoSuccess: (state, action) => {
      const index = state.items.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteTodoSuccess: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  setTodos,
  addTodoSuccess,
  updateTodoSuccess,
  deleteTodoSuccess,
  setLoading,
  setError
} = todosSlice.actions;

export const fetchTodosAsync = () => async dispatch => {
  dispatch(setLoading('loading'));
  try {
    const todos = await getTodos();
    dispatch(setTodos(todos));
    dispatch(setLoading('succeeded'));
  } catch (error) {
    dispatch(setError(error.toString()));
    dispatch(setLoading('failed'));
  }
};

export const addTodoAsync = (todo) => async dispatch => {
  try {
    const docRef = await addTodo(todo);
    dispatch(addTodoSuccess({ ...todo, id: docRef.id }));
  } catch (error) {
    dispatch(setError(error.toString()));
  }
};

export const updateTodoAsync = ({ id, updatedTodo }) => async dispatch => {
  try {
    await updateTodo(id, updatedTodo);
    dispatch(updateTodoSuccess({ id, ...updatedTodo }));
  } catch (error) {
    dispatch(setError(error.toString()));
  }
};

export const deleteTodoAsync = (id) => async dispatch => {
  try {
    await deleteTodo(id);
    dispatch(deleteTodoSuccess(id));
  } catch (error) {
    dispatch(setError(error.toString()));
  }
};

export default todosSlice.reducer;
