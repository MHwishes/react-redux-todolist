


import React, {Component} from 'react'

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

export default Footer;
