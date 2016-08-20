
import {Provider, connect} from 'react-redux';
import AddTodo from '../components/add-todo';

const mapDispatchToProps = (dispatch) => {
    "use strict";
    return {
        onAdd: (text) => {
            dispatch({type:'Add',text})
        }
    }
};

export default connect(() => {return {}}, mapDispatchToProps)(AddTodo);