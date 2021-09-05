
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
import { UserContextProvider } from './context/userContext';
import DashboardProfile from './pages/Dashboard-Profile';
function App() {
  
  return (

    <Router>
      <Switch>
        <UserContextProvider>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/register/otpcode' component={RegisterOtp}></Route>
        <Route path='/forget-password/change' component={ForgetPasswordChange} />
        <Route path='/forget-password' component={ForgetPassword} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/profile' component={DashboardProfile}/>
        </UserContextProvider>
     </Switch>
   </Router>
  );
}

export default App;
