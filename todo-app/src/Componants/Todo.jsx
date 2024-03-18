import React, { useEffect } from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList';
import { getTodos } from '../Controller/controler';

export const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const AllTodos =async (todos) => {
let {data} = await todos();
setTodos(data.todo);
  }
  useEffect(()=>{
    AllTodos(getTodos)
  },[])
 
  return (
    <div>
        <TodoInput AllTodos = {AllTodos}/>
       < TodoList todos= {todos}  AllTodos = {AllTodos}/>
    </div>
  )
}
