import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { browseProjects } from "../../actions/authActions";
import classnames from "classnames";
import axios from 'axios';


class BrowseProjectProf extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
          projects: []
        }
    }
    
      componentDidMount() {
        axios.get("/api/users/browseProjectsAlum")
        .then(res=> this.setState({projects:res.data}))
        .catch(err=>console.log(err))}

        // recommendations(e){

        //   //console.log(e);
        //   if(e.length > 0)
        //   {
        //     return( 
        //     <div>
        //      {e.map((item, index) => (
        //         <Item key={index} item={item} />
        //       )}
        //     </div>);
        //   }
        //   return null;
        // }
       

    
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
          <p ><img src={ require('./../images/AlumLanding.png')} style={{
                  height: "200px",width: "220px"}} /></p>  
          </h5>
            <p><b>Description:</b>{" "}{d.project_description}</p>
            <p><b>Created By:</b>{" "}{d.project_creator} </p>
            {/* {this.recommendations(d.recommendations)} */}
            <p><b>Recommendations:</b>{" "}{d.recommendations} </p>
        
            <p><b>Funds Required:</b>{" "}{d.funds_required}<b>$</b></p>
        
            <div style = {{textAlign : "center"}}>
            <Link to={{ pathname: '/makeDecision', state: { project: d} }} className="btn btn-large waves-effect waves-light hoverable green accent-3">
                 Make Decision
            </Link>
            </div>
            <div className="col s6" style = {{textAlign : "right"}}>
            {/* <button
              style={{
                width: "200px",
                borderRadius: "3px",
                letterSpacing: "1px",
                
              }}
              //onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Reject Project
            </button>  */}
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
                <Link to="/dashboardProf" className="btn-flat waves-effect">
                 <i className="material-icons left">keyboard_backspace</i> Back to
                    home
                </Link>
              </div>
            </div>
          </div>
        );
      
    }
}

BrowseProjectProf.propTypes = {
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
  
export default connect(
    mapStateToProps
  )(withRouter(BrowseProjectProf));

