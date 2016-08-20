import {Provider, connect} from 'react-redux';
import Footer from '../components/footer';



// const mapStateToProps = (state)=> {
//     return {
//         // todoItems: select(state,state.filterName)
//         filterName:state.filterName
//     }
// };


const mapDispatchToProps = (dispatch) => {
    return {
        onSetName:(name)=> {
            dispatch({type:'SetName',name})
        }
    }
};

//export default connect(mapStateToProps, mapDispatchToProps)(Footer);
export default connect(()=>{return{}}, mapDispatchToProps)(Footer);