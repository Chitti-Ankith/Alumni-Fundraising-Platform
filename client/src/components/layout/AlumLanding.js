import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4><b>Hello there, Old Friend</b>, 
            </h4>
            <img src={ require('./../images/AlumLanding.png')} style={{
                  height: "200px",width: "220px"}} />
            <p className="flow-text grey-text text-darken-1">
              Feeling Nostalgic Yet?
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/registerAlum"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/loginAlum"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
               >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
