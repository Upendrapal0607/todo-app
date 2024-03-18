import React, { useState } from 'react'
import styled from 'styled-components'
import { deleteTodos, getTodos, updateTodos } from '../Controller/controler';

export const TodoList = ({todos,AllTodos}) => {
  const [checkUpdate,setCheckUpdate] = useState(1);
  const [inputValue,SetInputValue] = useState("add task");

  const handleDelete = async(id) => {
    if(id){
      let {data} = await deleteTodos(id);
      AllTodos(getTodos)
      alert(data.message)
    }
    else alert("please delete a valid Todo");
 
  }

  const handleUpdate = async(id,status) => {
    if(id){
      let {data} = await updateTodos(id,{status:!status});
      alert(data.message)
      AllTodos(getTodos)
    }
    
    else alert("please delete a valid Todo");
  }
  const handleUpdatetodo = async(id) => {
    if(id){
      let {data}= await updateTodos(id,{task:inputValue});
      alert(data.message)
      SetInputValue("");
      setCheckUpdate(1);
      AllTodos(getTodos)
    }

    else alert("please delete a valid Todo");
  }
  
  const handleClickEdit = (id,task) =>{

    setCheckUpdate(id);
    SetInputValue(task);
  }

  return (
    <DIV>
      <table>
        <thead>
          <tr className='status-header'>
            <th>STATUS</th>
            <th>TASK</th>
            <th className='toggle-but-status'>TOGGLE BUTTON</th>
          </tr>
        </thead>
        <tbody>
        {
           todos.map(({status,_id,task},index) =>{
           return <tr className='table-body' key={_id}>
             <button onClick={()=>handleUpdate(_id,status)} className={status?"status-but-complete":"status-but-incomplete"}>{status?"Complete":"Incomplete"}</button>
             {_id==checkUpdate?<div>
              <input className='todo-input' value={inputValue} type="text" onChange={e=>SetInputValue(e.target.value)}/>
              <button onClick={()=>handleUpdatetodo(_id)}  className='update-but'>UPDATE</button>
             </div>:<td className='task-wrap'>{task}</td>}
             <td>
              <div className='btn-box'>
            <button onClick={()=>handleDelete(_id)} className='delete-but'>DELETE</button>
            <button onClick={()=>handleClickEdit(_id,task)} className='edit-but'>EDIT</button>
              </div>
             </td>
           </tr>
           })
        }
        </tbody>
      </table>
       
    </DIV>
  )
}

const DIV = styled.div`
table{
  /* border: 2px solid black; */
  width: 100%;
  scroll-behavior: smooth;
}
tr{
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  margin: 10px;
}
.table-body{
gap: 1rem;
  border: 2px solid black;
}
.table-body{
  margin: 10px;
}
.status-header{
  font-size: large;
  font-weight: 500;
}
.btn-box{
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

}
.delete-but,.edit-but{
  border: 2px solid black;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: large;
  font-weight: 600;
  cursor: pointer;
  
}
.task-wrap{
  font-size: large;
  font-weight: 400;
  text-align: start;
 
}
.status-but-complete{
  border: none;
  padding: 10px 15px;
  background-color: green;
  cursor: pointer;
  border-radius: 4px;
  font-size: medium;
  font-weight: 500;
 
}
.status-but-incomplete{
  border: none;
  padding: 10px 15px;
  background-color: red;
  cursor: pointer;
  border-radius: 4px;
  font-size: medium;
  font-weight: 500;
 
}
.delete-but{
  background-color: red;
  color: white;
}
.edit-but{
  background-color: #FFAB91;
  color: white;
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
  .update-but{
    background-color: #FFAB91;
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


@media screen and (max-width:764px){
  .btn-box{
    flex-direction: column;
  }
  .delete-but,.edit-but{
width: 100px;
  }
  .todo-input{
      width: 200px;
    }
}

`