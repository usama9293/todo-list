// src/firebaseService.js
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from './firebaseconfig';

const todosCollectionRef = collection(db, "todos");

export const addTodo = async (todo) => {
  try {
    const docRef = await addDoc(todosCollectionRef, todo);
    return docRef;
  } catch (error) {
    console.error("Error adding todo: ", error);
  }
};

export const updateTodo = async (id, updatedTodo) => {
  const todoDoc = doc(db, "todos", id);
  try {
    await updateDoc(todoDoc, updatedTodo);
  } catch (error) {
    console.error("Error updating todo: ", error);
  }
};

export const deleteTodo = async (id) => {
  const todoDoc = doc(db, "todos", id);
  try {
    await deleteDoc(todoDoc);
  } catch (error) {
    console.error("Error deleting todo: ", error);
  }
};

export const getTodos = async () => {
  try {
    const querySnapshot = await getDocs(todosCollectionRef);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching todos: ", error);
    return [];
  }
};
