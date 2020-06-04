import React from 'react';
import { Route } from 'react-router';
import { getAll } from './BooksAPI';
import Homepage from './modules/homepage/homepage';
import Searchpage from './modules/SearchPage/searchPage';
import './App.css';

function fetchData(){
  return new Promise((resolve,reject) =>{
    getAll().then(response => resolve(response))
  })
}

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={() =><Homepage fetchData={fetchData} />} />
      <Route path="/search" component={() => <Searchpage  fetchData={fetchData}/>} />
    </div>
  );
}

export default App;
