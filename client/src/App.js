import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import AlumLanding from "./components/layout/AlumLanding";
import StudentLanding from "./components/layout/StudentLanding";
import ProfLanding from "./components/layout/ProfLanding";
import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import RegisterAlum from "./components/auth/RegisterAlum";
import LoginAlum from "./components/auth/LoginAlum";
import RegisterStudent from "./components/auth/RegisterStudent";
import LoginStudent from "./components/auth/LoginStudent";
import RegisterProf from "./components/auth/RegisterProf";
import LoginProf from "./components/auth/LoginProf";
import LoginAdmin from "./components/auth/LoginAdmin";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardStudent from "./components/dashboard/DashboardStudent";
import DashboardAlum from "./components/dashboard/DashboardAlum";
import DashboardProf from "./components/dashboard/DashboardProf";
import DashboardAdmin from "./components/dashboard/DashboardAdmin";
import AddProject from "./components/dashboard/AddProject";
import BrowseProject from "./components/dashboard/BrowseProjects";
import BrowseProjectAlum from "./components/dashboard/BrowseProjectsAlum";
import BrowseProjectProf from "./components/dashboard/BrowseProjectsProf";
import Donate from "./components/dashboard/donate";
import MakeDecision from "./components/dashboard/MakeDecision";
import UpdateProject from "./components/dashboard/UpdateProject";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/ProfLanding" component={ProfLanding} />
            <Route exact path="/StudentLanding" component={StudentLanding} />
            <Route exact path="/AlumLanding" component={AlumLanding} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Home} />
            <Route exact path="/registerAlum" component={RegisterAlum} />
            <Route exact path="/loginAlum" component={LoginAlum} />
            <Route exact path="/registerStudent" component={RegisterStudent} />
            <Route exact path="/loginStudent" component={LoginStudent} />
            <Route exact path="/registerProf" component={RegisterProf} />
            <Route exact path="/loginProf" component={LoginProf} />
            <Route exact path="/loginAdmin" component={LoginAdmin} />
            <Route exact path="/addProject" component={AddProject} />
            <Route exact path="/browseProjects" component={BrowseProject} />
            <Route exact path="/browseProjectsAlum" component={BrowseProjectAlum} />
            <Route exact path="/browseProjectsProf" component={BrowseProjectProf} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/makeDecision" component={MakeDecision} />
            <Route exact path="/updateProject" component={UpdateProject} />
            <Switch>
              <PrivateRoute exact path="/dashboardStudent" component={DashboardStudent} />
              <PrivateRoute exact path="/dashboardAlum" component={DashboardAlum} />
              <PrivateRoute exact path="/dashboardAdmin" component={DashboardAdmin} />
              <PrivateRoute exact path="/dashboardProf" component={DashboardProf} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
