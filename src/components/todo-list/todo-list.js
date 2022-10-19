import React from 'react';

import TodoListItems from '../todo-list-item'; 
import './todo-list.css'

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone, visibleItems}) => {
  
    
    const elements = todos.map((item)=>{
      
       return (<li key = {item.id} className="list-group-item " >
            <TodoListItems
            label = {item.label}
            important = {item.important}
            done = {item.done}
            id = {item.id}
            onDeleted = {()=>{return onDeleted(item.id)}}        
            onToggleImportant = {()=> {onToggleImportant(item.id)}}
            onToggleDone = {()=> {onToggleDone(item.id)}}  
            />
        </li>)
    })

    return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
    )
  }

  export default TodoList;