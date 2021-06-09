import React from "react";


class App2 extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }


    componentDidMount(){
        this.timerId = setInterval(
            () => this.tick(), 950
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    
    tick(){
        this.setState(
            {
                date: new Date()
            }
        );
    }
    
    render(){
        return(<span>
        <h1>Hello {this.props.name}, how are you.....</h1>
        <h2>Today is {this.state.date.toLocaleDateString()}<br />
        Current time: {this.state.date.toLocaleTimeString()}
        </h2>
        </span>
        );
    }
}

  export default App2;