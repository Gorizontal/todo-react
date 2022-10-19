import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';




import './app.css';

export default class App extends React.Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awensome App'),
      this.createTodoItem('Have a lunch'),
    ],
    term : '',
    filter:'all'
  }

  createTodoItem(text){
      return {
        label: text,
        important: false,
        done: false,
        id: this.maxId++
      }
  }


  deleteItem = (id) => {
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((elem)=>{return elem.id === id});
      const newArr = [...todoData.slice(0,idx), ...todoData.slice(idx+1)] 
      return {
        todoData: newArr
      }
    })
  }

  
  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({todoData})=>{
      let newTodoData = [...todoData];
      newTodoData.push(newItem)

      return {
        todoData: newTodoData
      }
    })
  }

  toggleProperty(arr, id, property){
      const idx = arr.findIndex((el) =>{return el.id === id});
      const oldItem = arr[idx];
      const newItem = {...oldItem, [property]: !oldItem[property]};
      const newArr = [...arr.slice(0,idx), 
                      newItem, 
                      ...arr.slice(idx+1)];
      return newArr                
  }
  

  onToggleImportant=(id)=>{
    this.setState(({todoData})=>{
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    }) 
  }


  onToggleDone= (id)=>{
    this.setState(({todoData})=>{
      return {
        todoData: this.toggleProperty(todoData,id, 'done')
      }
    }) 
   }


   search=(items, term)=>{
    if(term.length === 0) {
      return items
    }
   return items.filter((item)=>{
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
   }


   filter=(items, filter)=>{

    if(filter === 'all'){
     return items
    } 
    if(filter === 'active'){
      return items.filter((el)=>{return el.done=== false})
    }
    if(filter === 'done'){
      return items.filter((el)=>{return el.done=== true})
    }

    return items
  }



   onSearchChange = (term) => {
    this.setState({term})
   }

   onFilterChanhed = (filter) => {
    this.setState({filter})
   }
  
  render(){
    const {todoData, term, filter} = this.state;
    const visibleItems =  this.filter(this.search(todoData, term), filter)
    const doneCount = this.state.todoData.filter((el)=> el.done === true).length
    const moreCount = this.state.todoData.filter((el)=> el.done === false).length


    return (
      <div className='header-wrapper'>
        
        <AppHeader 
        toDo = {moreCount}
        done = {doneCount}
        />
        <SearchPanel 
          addItem = {this.addItem}
          onSearchChange = {this.onSearchChange}
          filter = {filter}
          onFilterChanhed = {this.onFilterChanhed}/>
        <TodoList 
          todos = {visibleItems}
          onDeleted = {this.deleteItem}
          onToggleImportant = {this.onToggleImportant}
          onToggleDone = {this.onToggleDone}
          />
          
      </div>
    )
  }
}

