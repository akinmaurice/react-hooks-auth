import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './store';
import App from './components/App';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/pages/NotFound';
import Logout from './components/auth/Logout';
import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import './css/style.css';

// import authenticated action from  Login action
import { authenticated } from './actions/login';



// Import HOC MiddleWares
import requireAuth from './components/hoc/require_auth';
import noRequireAuth from './components/hoc/no_require_auth';


/*
 Check if user token exists
 then dispatch AUTHENTICATED Action
*/
const user = localStorage.getItem('token');

if (user) {
  store.dispatch(authenticated(true));
}


const Root = () => (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/login" exact component={noRequireAuth(Login)}/>
            <Route path="/register" exact component={noRequireAuth(Register)}/>
            <Route path="/logout" exact component={requireAuth(Logout)} />
            <Route path="/home" exact component={requireAuth(Home)} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );

  render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
