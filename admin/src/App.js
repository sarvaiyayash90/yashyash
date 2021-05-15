import React, { Component } from 'react';
import { BrowserRouter as Router,HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Logout = React.lazy(() => import('./views/pages/login/Logout'));

const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

  render() {
    const auth = localStorage.getItem('Auth_check')

    if (auth === null) {
      return( 
        <HashRouter>
          <React.Suspense fallback={loading}>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Redirect to="/login" />
          </React.Suspense>
        </HashRouter>
      )
    }
    else
    {
      return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            <Route exact path="/Logout" name="logout Page" component={Logout}/>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
      );
    }
  }
}

export default App;
