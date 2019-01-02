import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = { loading: false };

    componentDidMount() {
        // devServer
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p>{ this.state.loading.toString() }</p>
                <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            </div>
        );
    }
}

export default App;
