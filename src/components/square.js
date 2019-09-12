import React from 'react';
import ChildButton from './childButton';
export default class Square extends React.Component {
    state = {
        player: 'X',
        result: Array(9).fill(null),
        histo:null,
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
                return ;
            }
        })
        return null;  
    }
    onClick = (i) => {
        const clonedArray = this.state.result.slice();
        clonedArray[i] = this.state.player;
        this.setState(prevState =>({player: prevState.player === "X" ? "O" : "X", result: clonedArray}), () => {
            this.winner();
        });
    }
    squareRender(i) {
        return <ChildButton value={this.state.result[i]} howwin={this.state.win}  onClick={() => this.onClick(i)} player={this.state.player} />
    }
    playAgain = () => {
        this.setState({player: 'X', result: Array(9).fill(null), win: null,})
    }

    render() {
        return (
        <div>
            {this.state.win?<h1 className="winner">hey winner: {this.state.win}</h1>:''}
            <h1 className="winner">player: {this.state.player}</h1>
            <div className="board">
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
                <button className="" onClick={this.playAgain}>play again</button>
            </div>
        </div>
        );
    }
}