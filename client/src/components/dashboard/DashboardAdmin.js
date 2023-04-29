import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import axios from 'axios';






class DashboardAdmin extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    axios.get("/api/users/dashboardAdmin")
    .then(res=> this.setState({data:res.data}))
    .catch(err=>console.log(err))

      }
      

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Welcome Home</b> {user.name.split(" ")[0]}
              
              <p className = "flow-text grey-text text-darken-2">
                Wanna register a prof....?????           
              </p>
            </h4>
            <div className="col s6">
            <Link
                to="/registerProf"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register 
            </Link>
            </div>
            <div classname = "col s6">
            <button 
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

DashboardAdmin.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(DashboardAdmin);
