import React from 'react';

import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './search-panel.css';


export default class SearchPanel extends React.Component {

  state= {
    term: ''
  }
 
  onSearchChange=(e)=>{
    const term = e.target.value;
    this.setState({
      term
    })
    this.props.onSearchChange(term)
  }


    render() {
      const searchText = 'Поиск дел';
      const searchStyle = {
        fontSize: '15px'
      };
      const {addItem} = this.props;
    
      
     return (
     <div>
        <div className='search-block d-flex justify-content-between bd-highlight mb-2'>
          <input className='search-line form-control' style= {searchStyle} placeholder={searchText} value={this.state.term} onChange={this.onSearchChange}/>
          <ItemStatusFilter
          filter = {this.props.filter}
          onFilterChanhed = {this.props.onFilterChanhed}/>
        </div>
        <ItemAddForm 
          addItem = {addItem}
          />
      </div>)
    }
       
  }
