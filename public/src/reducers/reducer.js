const todoApp = (state = {todoItem: [], filterName: 'All'}, action)=> {
    switch (action.type) {
        case 'Add':
            state.todoItem.push({text: action.text, isDone: false});
            return {todoItem: [...state.todoItem]};

        case 'Delete':
            state.todoItem.splice(action.index, 1);
            return {todoItem: [...state.todoItem]};

        case 'SetName':
            // console.log(state);
            return {todoItem:[...state.todoItem],filterName: action.name};

        case 'Toggle':
            state.todoItem[action.index].isDone = !state.todoItem[action.index].isDone;
            return {todoItem: [...state.todoItem]};
    }
    return state;
};

export default todoApp
