import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';


function App() {
  return (
    <div className="App">
      <TodoWrapper  />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
