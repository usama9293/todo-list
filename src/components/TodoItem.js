import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTodoAsync, deleteTodoAsync } from '../redux/todoslice';
import '../styles/todoitem.scss'


const TodoItem = ({ todo, onEdit }) => {
    const dispatch = useDispatch();
  
    const handleToggle = () => {
      dispatch(updateTodoAsync({ id: todo.id, updatedTodo: { completed: !todo.completed } }));
    };
  
    const handleDelete = () => {
      dispatch(deleteTodoAsync(todo.id));
    };
  
    return (
      <li className='todo-item'>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        {todo.text}
        <button onClick={() => onEdit(todo)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </li>
    );
  };
  
  export default TodoItem;

