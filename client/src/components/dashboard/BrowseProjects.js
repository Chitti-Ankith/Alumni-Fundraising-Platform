import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { browseProjects } from "../../actions/authActions";
import classnames from "classnames";
import axios from 'axios';

var r1 = {"project_title":"Sm-to-sm bowel anastom","project_description":"Laceration of unspecified blood vessel at shoulder and upper arm level, right arm","supervising_professor":"Dorie Hissett","project_creator":"Tod Herries","funds_required":9232};
var r2 = {"project_title":"Open reduct mandible fx","project_description":"Poisoning by, adverse effect of and underdosing of other and unspecified hormones and synthetic substitutes","supervising_professor":"Aretha Osban","project_creator":"Fernandina Balham","funds_required":1906};


class BrowseProject extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  recommendations(e){

    console.log(e);
    if(e.length > 0)
    {
      return( 
      <div>
      <p><b>Recommendations:</b>{" "}{e} </p>
      </div>);
    }
    return null;
  }

  componentDidMount() {
    axios.get("/api/users/browseProjects",{
          params:{
            name:this.props.auth.user.name
          }
        })
    .then(res=> this.setState({projects:res.data}))
    .catch(err=>console.log(err))}

    
    render() {
      const { user } = this.props.auth;
      var list=[]
      for (var key in this.state.projects) {
      if (this.state.projects.hasOwnProperty(key)) {           
        list.push(this.state.projects[key]);
        }
      }
      const listItems = list.map((d)=><div key = {d.project_title}>
      <h5 style = {{textAlign : "center"}}> 
      <b>Title:</b>{" "}{d.project_title}
        <p ><img src={(d.pic)?"data:image/png;base64,#((new Buffer(d.pic[0])).toString('base64'))":require('./../images/AlumLanding.png')} style={{
                height: "200px",width: "220px"}} /></p>  
        </h5>
          <p><b>Description:</b>{" "}{d.project_description}</p>
          <p><b>Created By:</b>{" "}{d.project_creator} </p>
          <p><b>Supervisor:</b>{" "}{d.supervising_professor} </p>
          {this.recommendations(d.recommendations)}
          {/* <p><b>Recommendations:</b>{" "}{d.recommendations} </p> */}
          <p><b>Funds Required:</b>{" "}{d.funds_required}<b>$</b></p>
          <p><b>Funds Collected:</b>{" "}{d.funds_collected}<b>$</b></p>
          <div style = {{textAlign : "center"}}>
            <Link to={{ pathname: '/updateProject', state: { project: d} }} className="btn btn-large waves-effect waves-light hoverable green accent-3">
                 Update
            </Link>
            </div>
       <p></p>
       <p>______________________________________________________</p>
  
      
       </div>);
      return (
        <div style={{ height: "50vh" }} className="container">
          <div className="row">
            <div className="landing-copy col s12 left-align">
              <h4 style = {{ fontSize : "30px"}} >
                <div style = {{textAlign : "center",paddingBottom : "10px"}}>
                <b>Hey there,</b> {user.name.split(" ")[0]}! these are the available projects.
                </div>
                <p className="flow-text grey-text text-darken-1" style = {{ fontSize : "20px"}}>
                {listItems}
                </p>
              </h4>
              <Link to="/dashboardStudent" className="btn-flat waves-effect">
               <i className="material-icons left">keyboard_backspace</i> Back to
                  home
              </Link>
            </div>
          </div>
        </div>
      );
    
  }
}

BrowseProject.propTypes = {
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
  
export default connect(
    mapStateToProps
  )(withRouter(BrowseProject));

