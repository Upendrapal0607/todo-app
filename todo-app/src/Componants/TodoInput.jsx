import React, { useState } from 'react'
import styled from 'styled-components'
import { addTodos, getTodos } from '../Controller/controler';

export const TodoInput = ({AllTodos}) => {
const [inputValue ,setInputValue] = useState("");
const handleAddTodo = async() => {
  if(inputValue){
    let myTodo = {
      task:inputValue,
      status:false,
    }
    let {data} =  await addTodos(myTodo)
    AllTodos(getTodos)
 alert(data.message)
  } else{
    alert("Please enter a task");
  }
};

  return (
    <DIV>
      <input value={inputValue} onChange={e=>setInputValue(e.target.value)} className='todo-input' type="text" placeholder='Add new todo'/>
      <button onClick={handleAddTodo} className='add-todos'>Add</button>
    </DIV>
  )
}

const DIV = styled.div`
  display: flex;
  border: 2px solid #90A4AE;
  padding: 20px 0px;
  margin: 10px;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  .add-todos{
    background-color: #90A4AE;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
  }
  .todo-input{
  width: 400px;
    color: black;
    padding: 10px 20px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 10px;
  }

  @media screen and (max-width:764px){
    gap: 1rem;
    .todo-input{
      width: 200px;
    }
}

`