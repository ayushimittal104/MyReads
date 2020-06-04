import React from 'react';
import './App.css';
import Homepage from './modules/homepage/homepage';
import { Route } from 'react-router';
import Searchpage from './modules/SearchPage/searchPage';
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/search" component={Searchpage} />
    </div>
  );
}

export default App;
