import React from 'react';
import logo from './logo.svg';
import './App.css';
import { setFacilities, getFacilities, initFacilities} from './api/localstorage';

function App() {
  initFacilities();
  const myFacilities = getFacilities();
  myFacilities.then((r)=>{
    console.log('hallo',r);
  })
  console.log('myFacilities', );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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

export default App;
