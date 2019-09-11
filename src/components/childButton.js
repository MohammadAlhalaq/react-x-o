import React from 'react';
export default class ChildButton extends React.Component{
    state = {
        value:null,
    };
    
    changevalue =()=> {
        this.setState({value: this.props.player});
        this.props.changePlayer();
    }
    render(){
        return (
        <button className="button" onClick={this.changevalue}>{
            this.state.value}
        </button>
        )
    }
}