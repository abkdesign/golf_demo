import React from 'react';
import logo from './logo.svg';
import './App.css';
import { setFacilities, getFacilities, initFacilities} from './api/localstorage';
import CardsList from './feature/facility/CardsList';

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
        <ul className="menuList">
          <li className="menuItem">Home</li>
          <li className="menuItem">Facility</li>
          <li className="menuItem">Admin</li>
          <li className="menuItem">MyTournaments</li>
        </ul>
      </header>
      <h1>Facility list</h1>
      <main>
        <CardsList/>
      </main>
    </div>
  );
}

export default App;
