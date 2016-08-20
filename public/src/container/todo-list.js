import {Provider, connect} from 'react-redux';
import TodoList from '../components/todo-list'

function select(state) {
    console.log(state);
    if (state.filterName === 'All') {
        return state.todoItem;
    }
    if (state.filterName === 'Active') {
        return state.todoItem.filter((todo)=>!todo.isDone)
    }
    if (state.filterName === 'Complete') {
        return state.todoItem.filter((todo)=>todo.isDone)
    }
    return state.todoItem;
}

const mapStateToProps = (state)=> {
    return {
        todoItems: select(state)
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        onRemove: (index)=> {
            dispatch({
                type: 'Delete',
                index
            })
        },
        onToggle: (index)=> {
            dispatch({
                type: 'Toggle',
                index
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)