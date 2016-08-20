

import React, {Component} from 'react'

class TodoList extends Component{
    toggle(index){
        this.props.onToggle(index);
    }
    remove(index){
        this.props.onRemove(index);
    }
    render(){
        return(
            <div>
                {this.props.todoItems.map((todoItem,index)=>{
                    return <div key={index}>
                        <input type="checkbox" checked={todoItem.isDone}
                               onClick={this.toggle.bind(this,index)}/>
                        {todoItem.isDone ? <s> {todoItem.text}</s> : todoItem.text}
                        <button onClick={this.remove.bind(this,index)}>x</button>
                    </div>
                })}
            </div>
        )
    }
}

export default TodoList;