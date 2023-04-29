import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Welcome</b> to the BITS Alumni FundRaising Platform
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Choose Your Role
            </p>
            <br />
            <div className="col s4">
              <Link
                to="/StudentLanding"
                style={{
                  height: "250px",
                  width: "240px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                <img src= { require('./images/student.png')} class="circle responsive-img"/>
                Student
              </Link>
            </div>
            <div className="col s4">
                
              <Link
                to="/AlumLanding"
                style={{
                  height: "250px",
                  width: "240px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                <img src= { require('./images/alumni.png')} class="circle responsive-img"/>
                Alumni 
              </Link>
            </div>
            <div className="col s4">
              <Link
                to="/ProfLanding"
                style={{
                  height: "250px",
                  width: "240px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                <img src= { require('./images/professor.png')} class="circle responsive-img"/>
                Professor
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 center-align">
          <div className="col s6">
              <Link
                to="/loginAdmin"
                style={{
                  height: "50px",
                  width: "100px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable red accent-3"
              >
                Admin
              </Link>
            </div>
      </div>
      </div>
    );
  }
}

export default Home;
