import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Contact, Portfolio } from './components';
import './styles.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home title={'Home'} />
        </Route>
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
