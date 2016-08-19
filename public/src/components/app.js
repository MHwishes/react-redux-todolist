import React, {Component} from 'react'
import reactDOM from 'react-dom'
import {createStore} from 'redux'
import todoApp from '../reducers/index'

const store = createStore(todoApp);

class App extends Component {

    add(text) {
        store.dispatch({type: 'Add', text});
    }
    remove(index){
        store.dispatch({type:'Delete',index})
    }
    toggle(index){
        store.dispatch({type:'Toggle',index})
    }
    filterTodos(){
        if(store.getState().filterName==='All'){
            return store.getState().todoItem;
        }
        else if(store.getState().filterName==='Active'){
            return store.getState().todoItem.filter((todo)=>!todo.isDone)
        }
        else{
            return store.getState().todoItem.filter((todo)=>todo.isDone)
        }
    }
    setName(name){
        store.dispatch({type:'SetName',name})
    }
    render() {
        return (<div>
            <AddTodo onAdd={this.add.bind(this)}/>
            <TodoList  onRemove={this.remove.bind(this)}
                       onToggle={this.toggle.bind(this)}
                        todoItems={this.filterTodos()}/>
            <Footer onSetName={this.setName}/>

        </div>)
    }

}

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
class Footer extends Component{
    setName(name){
        this.props.onSetName(name)
    }
    render(){
        return(
            <div>
                <a onClick={this.setName.bind(this,'All')}>all</a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a onClick={this.setName.bind(this,'Active')}>Active</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a onClick={this.setName.bind(this,'Complete')}>Complete</a>
            </div>
        )
    }
}



function renderFunction() {
    reactDOM.render(<App/>,
        document.getElementById('App'));
}

store.subscribe(renderFunction);

renderFunction();