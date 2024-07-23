import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodosAsync } from '../redux/todoslice';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import '../styles/home.scss'

const Home = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.items);
    const [currentTodo, setCurrentTodo] = useState(null);
  
    useEffect(() => {
      dispatch(fetchTodosAsync());
    }, [dispatch]);
  
    const handleEdit = (todo) => {
      setCurrentTodo(todo);
    };
  
    return (
      <div className='home'>
        <h1>Todo App</h1>
        <TodoForm currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onEdit={handleEdit} />
          ))}
        </ul>
      </div>
    );
  };
  
  export default Home;