const todoApp = (state = {todoItem: [], filterName: 'All'}, action)=> {
    switch (action.type) {
        case 'Add':
            state.todoItem.push({text: action.text, isDone: false});
            return state;

        case 'Delete':
            state.todoItem.splice(action.index, 1);
            return state;

        case 'SetName':
            state.filterName=action.name;
            return state;
        case 'Toggle':
            state.todoItem[action.index].isDone=! state.todoItem[action.index].isDone;
    }
    return state;
};

export default todoApp
