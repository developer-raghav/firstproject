import logo from './logo.svg';
import './App.css';
import Welcome from './first';
import React from 'react';
import App2 from './second';


class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render(){
    return (
      <button onClick = {this.handleClick}>
        {this.state.isToggleOn? "On" : "Off"}
      </button>
    )
  }

}


class App extends React.Component{

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <App2 name= {"Guys"} />
            {/* <Toggle /> */}
          </p>  
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          
        {/* <Welcome /> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}


export default App;
