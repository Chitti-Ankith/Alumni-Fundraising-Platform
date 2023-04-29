import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import axios from 'axios';

class MakeDecision extends Component {
 
    constructor(props) {
        super(props);
        //console.log(this.props.id);
        this.state = {
          project_decision: '',
          recommendations: ''
        }
    }

    onClick = e =>{
        console.log(e.currentTarget.value);
        const newProjectData = {
          project_id: this.props.location.state.project._id,
          status: e.currentTarget.value,
          approver: this.props.auth.user.name
          //funds_required: this.state.project.funds_required - this.state.funds_donated
        }; 
        axios
        .post("/api/users/makeDecision", newProjectData)
        .then(res => this.props.history.push("/dashboardProf"))
        .catch(err => console.log(err)
        );      
      }
    
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    onSubmit = e => {
        e.preventDefault();
    
        const newProjectData = {
          project_id: this.props.location.state.project._id,
          recommendations: this.state.recommendations,
          prof_name: this.props.auth.user.name
          //funds_required: this.state.project.funds_required - this.state.funds_donated
        };
        console.log(newProjectData);
        //this.props.updateFunds(newProjectData,this.props.history);
        axios
        .post("/api/users/makeDecision", newProjectData)
        .then(res => this.props.history.push("/dashboardProf"))
        .catch(err => console.log(err)
        );
      };

    
    render() {
        const {user} = this.props.auth;
        const {project} = this.props.location.state;
        
        return (
            <div className="container">
            <div className="row">
              <div className="col s8 offset-s2">
                <Link to="/browseProjectsProf" className="btn-flat waves-effect">
                  <i className="material-icons left">keyboard_backspace</i> Back 
                  
                </Link>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <h4>
                    <b>Make your decision Prof. {user.name.split(" ")[0]}</b> 
                  </h4>
                  <p></p>
                  <h6>
                    <b>Project Details are mentioned below for reference.</b>
                  </h6>
                  {/* {project._id} */}

             <div className="flow-text brown-text text-darken-3">
                <h6> 
                <b>Title:</b>{" "}{project.project_title}
                    {/* <p ><img src={ require('./../images/AlumLanding.png')} style={{
                            height: "200px",width: "220px"}} /></p>   */}
                    
                    <p><b>Description:</b>{" "}<b>{project.project_description}</b></p>
                    <p><b>Created By:</b>{" "}{project.project_creator} </p>
                
                    <p><b>Funds Required:</b>{" "}{project.funds_required}<b>$</b></p>
                    
                    
                <p></p>
                <p>______________________________________________________</p>
                </h6>
      
            </div>
            <div className="landing-copy col s12 center-align">
            <div classname = "col s1">
            <button
              onClick={this.onClick}
              value = {'approved'}
              className="waves-effect waves-light btn-small"
            >
              <div className="valign-wrapper">
                <i className="material-icons">monetization_on</i> Accept 
            </div>
            </button> 
            </div>  
            <p></p>
            <div classname = "col s12">
            <button
              onClick={this.onClick}
              value = {'rejected'}
              className="waves-effect waves-light btn-small"
            >
            <div className="valign-wrapper">
                <i className="material-icons">money_off</i> Reject
            </div>
            </button>  
            </div>  
            </div>         
                </div>
                <form noValidate onSubmit={this.onSubmit}>
                  
                <div className="input-field col s12">
                <textarea
                  id="textarea1" class="materialize-textarea"
                  onChange={this.onChange}
                  value={this.state.recommendations}
                  //error={errors.project_description}
                  id="recommendations"
                  type="text"
                />
                <label htmlFor="recommendations">Project Recommendations</label>
                </div>    

                  <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button
                      style={{
                        width: "300px",
                        borderRadius: "3px",
                        letterSpacing: "1px",
                        marginTop: "1rem"
                      }}
                      type="submit"
                      className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                    >
                      Make Recommendations
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      
    }
}

MakeDecision.propTypes = {
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth
});
  
export default connect(
    mapStateToProps
  )(withRouter(MakeDecision));