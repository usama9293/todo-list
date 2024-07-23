import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync, updateTodoAsync } from '../redux/todoslice';
import '../styles/todoform.scss'

const TodoForm = ({ currentTodo, setCurrentTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTodo) {
      setInputValue(currentTodo.text);
    } else {
      setInputValue('');
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    if (currentTodo) {
      dispatch(updateTodoAsync({ id: currentTodo.id, updatedTodo: { text: inputValue } }));
      setCurrentTodo(null);
    } else {
      dispatch(addTodoAsync({ text: inputValue, completed: false }));
    }
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">{currentTodo ? 'Update Todo' : 'Add Todo'}</button>
    </form>
  );
};

export default TodoForm;

