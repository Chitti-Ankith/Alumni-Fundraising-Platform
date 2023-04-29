import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateFunds } from "../../actions/authActions";
import classnames from "classnames";
import axios from 'axios';
import BrowseProjectsAlum from './BrowseProjectsAlum';

class Donate extends Component {
 
    constructor(props) {
        super(props);
        //console.log(this.props.id);
        this.state = {
          project: '',
          funds_donated: ''
        }
    }

    
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    onSubmit = e => {
        e.preventDefault();
    
        const newProjectData = {
          project_id: this.props.location.state.id,
          funds_donated: this.state.funds_donated,
          donor: this.props.auth.user.id,
          donor_name: this.props.auth.user.name

          //funds_required: this.state.project.funds_required - this.state.funds_donated
        };
        //console.log(newProjectData);
        //this.props.updateFunds(newProjectData,this.props.history);
        axios
        .post("/api/users/donate", newProjectData)
        .then(res => this.props.history.push("/dashboardAlum"))
        .catch(err => console.log(err)
        );
      };

    
    render() {
        const {user} = this.props.auth;
        const {id} = this.props.location.state;
        
        return (
            <div className="container">
            <div className="row">
              <div className="col s8 offset-s2">
                <Link to="/browseProjectsAlum" className="btn-flat waves-effect">
                  <i className="material-icons left">keyboard_backspace</i> Back 
                  
                </Link>
                {id}
                {user.name}
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <h4>
                    <b>Enter the donation below</b>
                  </h4>
                  {/*
                  <p className="grey-text text-darken-1">
                    Already have an account? <Link to="/login">Log in</Link>
                  </p>
                  */}
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                  
                  <div className="input-field col s12">
                    <input
                      onChange={this.onChange}
                      value={this.state.funds_donated}
                      id="funds_donated"
                      type="number"
                      className={classnames("")}
                    />
                    <label htmlFor="funds_donated">Please Enter the amount of funds</label>
                    <span className="red-text"></span>
                  </div>
    
                  <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button
                      style={{
                        width: "150px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                      }}
                      type="submit"
                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      
    }
}

Donate.propTypes = {
    updateFunds: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth
});
  
export default connect(
    mapStateToProps,
    { updateFunds }
  )(withRouter(Donate));