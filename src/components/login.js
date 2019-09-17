import React, { Component } from 'react'
import Square from './square';
import './login.css';
class Login extends Component {
    
  state = {
    nameX: {name: null, value: 0},
    nameO: {name: null, value: 0},
    login: null,
  };

  login = () => {
    if (this.state.nameX.name !== null && this.state.nameO.name.name !== null) {
      this.setState({login: true});
    }
  };
  resultV = (winPlayer) => {
    console.log(this.state.nameO.name, winPlayer);
    
    if ('O' === winPlayer) {
      this.setState({ nameO: {name: this.state.nameO.name, value: this.state.nameO.value += 1 }});
    }else{
      this.setState({ nameX: {name: this.state.nameX.name, value: this.state.nameX.value += 1 }});
    }
  }
  loginForm = () => {
    if (!this.state.login) {
      return (
      <div className="form-name">
        <input placeholder="player X" className='name' type="text" name='X' onChange={(event) => {this.setState({nameX: {name: event.target.value, value: 0}})}}/>
        <input placeholder="player O" className='name' type="text" name='O' onChange={(event) => {this.setState({nameO: {name: event.target.value, value: 0}})}}/>
        <button className="login" onClick={this.login}  >submit</button>
      </div>)
    } else {
      return <div>
        <Square resultV={this.resultV} names={{value:{X: this.state.nameX.value, O: this.state.nameO.value}, O:this.state.nameO.name, X:this.state.nameX.name}} logout={() => {this.setState({login: false, nameO: null, nameX: null})}} />
      </div> 
    }
  }

  render() {
    return (
      <div>
        {this.loginForm()}
      </div>
    )
  };
};

export default Login;