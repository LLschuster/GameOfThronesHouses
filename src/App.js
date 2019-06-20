import React from 'react';
import MainPage from './components/MainPage';
import DetailPage from './components/DetailPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
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
