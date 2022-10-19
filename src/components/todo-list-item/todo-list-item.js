import React, {Component} from 'react';
import './todo-list-item.css'



export default class TodoListItem extends Component {

    render(){
        const {label, onDeleted, 
                onToggleDone, 
                onToggleImportant,
                done, important} = this.props;
            
        let classNames = 'todo-list-item-label';

        if(done){ classNames+= ' done'} 
        if(important){classNames+= ' important'}

        return (
        <span className= 'd-flex justify-content-between align-items-center' >
            <span className={classNames}  onClick={ onToggleDone}> 
                { label } 
            </span>

            <div>
                <button type="button" className="btn-del btn btn-outline-danger btn-sm float-right" 
                onClick={onDeleted}
                >
                <i className="fa fa-duotone fa-trash" ></i>
                </button>
                <button type="button"className="btn-del btn btn-outline-success btn-sm float-right"  onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>
            </div>
        </span>)
    }
}




