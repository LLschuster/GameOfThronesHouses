import React from 'react';
import MainPage from './components/houses/MainPage';
import DetailPage from './components/houses/DetailPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/shared/Navbar';


function App() {
  return (
    <BrowserRouter basename='/GameOfThronesHouses'>
    <Navbar/>
      <div className="App">
          <Switch>
            <Route exact path='/' component={MainPage}></Route>
            <Route exact path='/house/:house' component={DetailPage}></Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
