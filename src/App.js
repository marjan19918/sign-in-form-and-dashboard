
import './App.css';
import './pages/Login/index' 
import Login from './pages/Login/index';
import Register from './pages/Register'
 import RegisterOtp from './pages/Register-otp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import ForgetPasswordChange from './pages/ForgetPassword-change';
import ForgetPassword from './pages/ForgetPassword';
import Dashboard from './pages/Dashboard';
function App() {
  
  return (

    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/register/otpcode' component={RegisterOtp}></Route>
        <Route path='/forget-password/change' component={ForgetPasswordChange} />
        <Route path='/forget-password' component={ForgetPassword} />
        <Route path='/dashboard' component={Dashboard}/>
        
     </Switch>
   </Router>
  );
}

export default App;
