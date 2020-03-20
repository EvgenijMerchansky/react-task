import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

function App(state) {
  console.log(state, 'STATE');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{state.count}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

// const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps)(App);
