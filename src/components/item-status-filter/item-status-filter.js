import React from "react"
import "./item-status-filter.css"

export default class ItemStatusFilter extends React.Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]



    render (){
        const {filter, onFilterChanhed} = this.props
        const buttons = this.buttons.map(({name, label})=>{
            const active = filter === name;
            const clazz = active ? "btn btn-outline-primary btn-active" : "btn btn-outline-primary"
            return (
                <button type="button" className={clazz} data-bs-toggle="button" key = {name} 
                onClick={()=>{onFilterChanhed(name)}}>{label}</button>
            )
        })
        
        return (
            <div className="btn-groupe">
           {buttons}
          </div>
    
        )

    }
}
