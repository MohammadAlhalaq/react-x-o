import React from 'react';
import ChildButton from './childButton';

export default class Squer extends React.Component{
    state = {
        player :'X'
    }
    changePlayer = () => {
        this.setState(prevState => ({ player: prevState.player === "X" ? "O": "X" }))
    }
    squerRender(i){
        return <ChildButton changePlayer={this.changePlayer} player={this.state.player} />

    }
    render(){
        return(
            <div className='board'>
                <h1>player: {this.state.player}</h1>
                <div className='board__line'>
                    {this.squerRender(1)}
                    {this.squerRender(2)}
                    {this.squerRender(3)}
                </div>
                <div className='board__line'>
                    {this.squerRender(4)}
                    {this.squerRender(5)}
                    {this.squerRender(6)}
                </div>
                <div className='board__line'>
                    {this.squerRender(7)}
                    {this.squerRender(8)}
                    {this.squerRender(9)}
                </div>
                {/* <button className="button" onClick={()=>this.setState({})}>play again</button> */}
            </div> 
        );
    }
}