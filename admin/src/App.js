import React, { Component } from 'react';
import { BrowserRouter as Router,HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import './scss/style.scss';

// import axios from 'axios';
// axios.defaults.withCredentials = true

import './routes';
import './containers/TheSidebar';

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
const Forgot_Password = React.lazy(() => import('./views/pages/login/Forgot_Password'));
const Update_Password = React.lazy(() => import('./views/pages/login/Update_Password'));

const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {

    componentDidMount(){
    
    setInterval(()=>{
        const login_Auth_check_new = localStorage.getItem('Auth_check');
        const login_Token_Key_new = localStorage.getItem('Token_Key');
        if(login_Auth_check_new === null || login_Auth_check_new === "" || login_Token_Key_new === null || login_Token_Key_new === "" )
        {
          localStorage.removeItem('Auth_check');
          localStorage.removeItem('Token_Key');
          localStorage.removeItem('chk_user');
          if(login_Auth_check_new!= null || login_Token_Key_new!=null)
          {
            window.location.reload()
          }
          // return <Redirect to="/"/>
          //this.setState({login_Auth_check:false})
          // window.location.reload()
        } 
      },1000);
    }

  render() {
    const auth = localStorage.getItem('Auth_check')

    if (auth === null) {
      return( 
        <HashRouter>
          <React.Suspense fallback={loading}>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/forgot_password" name="Forgot Password" render={props => <Forgot_Password {...props}/>} />
            <Route exact path="/update_password/:id" name="Forgot Password" render={props => <Update_Password {...props}/>} />
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
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} /> */}
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
