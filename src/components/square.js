import React from 'react';
import ChildButton from './childButton';
export default class Square extends React.Component {
    state = {
        player: 'X',
        result: Array(9).fill(null),
        history:[Array(9).fill(null)],
        win: null,
    }
    winner = () => {
        const { result } = this.state;
        const list = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]; 
        list.forEach((ele) => {
            const [a, b, c] = ele;
            if (result[a] && result[a] === result[b] && result[b] === result[c]){
                this.setState({ win: result[a]});
                this.props.resultV(result[a]);
                return ;
            }
        })
        return null;  
    }
    onClick = (i) => {
        const clonedArray = this.state.result.slice();
        clonedArray[i] = this.state.player;
        const fakeHistory = this.state.history.slice();
        fakeHistory.push(clonedArray);
        this.setState(prevState =>({history: fakeHistory,player: prevState.player === "X" ? "O" : "X", result: clonedArray}), () => {
            this.winner();

        });
    }
    squareRender(i) {
        return <ChildButton value={this.state.result[i]} howwin={this.state.win}  onClick={() => this.onClick(i)} player={this.state.player} />
    }
    playAgain = () => {
        this.setState({player: 'X', result: Array(9).fill(null), win: null, history:[Array(9).fill(null)]})
    }
    getmove = (index) => {
        const newHistory = this.state.history.slice();
        if(this.state.win===null)newHistory.splice(index+1);
        const nextplayer= (index %2 === 0?  "X": "O");
        this.setState(prevState =>({result : prevState.history[index], history: newHistory , player: nextplayer}));
    }
    addHistoryButton = () => {
        const buttons = this.state.history.map((item, index) => 
        {
            if(index !== 0)return <div className='move' onClick={() => this.getmove(index)}> move to {index}</div>
            return null;
        });
        return buttons;
    }
    render() {
        return (
        <div>
            <div className="winner">
            {this.state.win?<h2>winner: {this.props.names[this.state.win]} : {this.props.names.value[this.state.win]}</h2>:''}
            {!this.state.win?<h1 >player: {this.props.names[this.state.player]} </h1>:''}
            </div>
            <div className="board">
            <div className="history">{this.addHistoryButton()}</div>
                <div className='board__line'>
                    {this.squareRender(0)}
                    {this.squareRender(1)}
                    {this.squareRender(2)}
                </div>
                <div className='board__line'>
                    {this.squareRender(3)}
                    {this.squareRender(4)}
                    {this.squareRender(5)}
                </div>
                <div className='board__line'>
                    {this.squareRender(6)}
                    {this.squareRender(7)}
                    {this.squareRender(8)}
                </div>
                <button className="restart" onClick={this.playAgain}>play again</button>
                {/* <button className="restart" onClick={this.playAgain}>play again</button> */}
                <button className='restart' onClick={this.props.logout} >logout</button>
                
            </div>
        </div>
        );
    }
}