import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodosList from './components/TodosList.component';
import EditToDo from './components/EditToDo.component';
import CreateToDo from './components/CreateToDo.component';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router> 
      <div className="container">
        <Navbar />
        <Route exact path="/" component={ TodosList } />
        <Route exact path="/edit/:id" component={ EditToDo } />
        <Route exact path="/create" component={ CreateToDo } />
      </div>
    </Router>
  );
}

export default App;
