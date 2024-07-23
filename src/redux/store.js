import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoslice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export {store};
