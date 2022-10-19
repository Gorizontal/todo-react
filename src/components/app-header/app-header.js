import React from 'react';

const AppHeader = ({toDo, done})=> {
 

    
    return  (
        <header className='d-flex justify-content-between bd-highlight mb-2'>
            <h1>Todo List</h1>
            <h6 className='mt-4'>{toDo} more to do, {done} done</h6>
        </header>
    )
    
  }

  export default AppHeader;