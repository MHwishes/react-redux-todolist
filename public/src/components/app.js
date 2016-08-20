import React, {Component} from 'react'
import AddTodo from'../container/add-todo'
import TodoList from'../container/todo-list'
import Footer from'../container/footer'

class App extends Component {
    render() {
        return (<div>

            <AddTodo/>
            <TodoList/>
            <Footer />

        </div>)
    }
}

export default App;



