import React from "react";

import './item-add-form.css';

export default class ItemAddForm extends React.Component {

    state = {
        value: ''
    }

    onSubmit = (event) =>{
    //   const a = this.state.value;
    //   event.preventDefault()
    //     return a
    
    event.preventDefault()
    if(this.state.value === ''){return }
    this.props.addItem(this.state.value)
    this.setState({
        value: ''
    })
    
    }

    onLabelChange=(event)=>{
       this.setState({
        value: event.target.value
       })
    }
    
    render(){
        // const {addItem} = this.props
        
        return (
        <form className="item-add-form d-flex justify-content-between mb-2 mt-5" onSubmit={this.onSubmit}>
            <input className='search-line form-control'  placeholder="Добавь себе дело" 
            onChange={this.onLabelChange}
            value={this.state.value}/>
            <button type="button" className="btn btn-outline-success"
            onClick={(e)=>{this.onSubmit(e)}} >
                <b>Добавить дело</b> 
            </button>
        </form>

        )
    }
}


// onClick={(event)=>{addItem(this.onSubmit(event))}}