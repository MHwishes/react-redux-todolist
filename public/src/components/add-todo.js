
import React, {Component} from 'react'


class AddTodo extends Component {
    add() {
        let text = this.refs.mytext.value;
        this.props.onAdd(text);
        this.refs.mytext.value ='';
    }
    render() {
        return ( <div>
            <input type="text" ref="mytext"/>
            <button onClick={this.add.bind(this)}>+</button>
        </div>)
    }
}

export default AddTodo;