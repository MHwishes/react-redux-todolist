const todoApp = (state = {todoItem: [], filterName: 'All'},action)=> {
    switch (action.type) {

        case 'GETTODOS':
            return {todoItem:action.todoItem};

        case 'ButtonGETTODOS':

            return {todoItem:action.state.todoItem,filterName:action.state.filterName};
    }
    return state;
};

export default todoApp
