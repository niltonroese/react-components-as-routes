import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, link} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'


ReactDOM.render(
  <Router>
    <div>
      <Navbar />
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/about' component={About} />
    </div>
  </Router>,
  document.getElementById('root')
);
