import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { donate } from "../../actions/authActions";
import classnames from "classnames";
import axios from 'axios';
import Donate from './donate';


class BrowseProjectAlum extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
          projects: [],   
          project: null
        }
        //this._onButtonClick = this._onButtonClick.bind(this);
    }

    
    
    
      componentDidMount() {
        axios.get("/api/users/browseProjectsAlum")
        .then(res=> this.setState({projects:res.data}))
        .catch(err=>console.log(err))}

      _onButtonClick = e => {
        
        console.log(e);
        const ProjectData = {
          project_id: e
        };
        
        axios
        .post("/api/users/donate", ProjectData);
        
        //this.props.donate(ProjectData,this.props.history);
      }

      
    
    render() {
        const { user } = this.props.auth;
        var list=[]
        for (var key in this.state.projects) {
        if (this.state.projects.hasOwnProperty(key)) {           
          list.push(this.state.projects[key]);
          }
        }
        const listItems = list.map((d)=><div key = {d.project_title} >
      

        <h5 style = {{textAlign : "center"}}> 
        <b>Title:</b>{" "}{d.project_title}
          <p ><img src={ require('./../images/AlumLanding.png')} style={{
                  height: "200px",width: "220px"}} /></p>  
          </h5>
            <p><b>Description:</b>{" "}{d.project_description}</p>
            <p><b>Created By:</b>{" "}{d.project_creator} </p>
        
            <p><b>Funds Required:</b>{" "}{d.funds_required}<b>$</b></p>
            
            
            
            <p><b>Funds Collected:</b>{" "}{d.funds_collected}<b>$</b></p>
            <div style = {{textAlign : "center"}}>
            {/* <button 
              style={{
                width: "200px",
                borderRadius: "3px",
                letterSpacing: "1px",
                marginTop: "1rem"
              }}
            
              //onclick={this._onButtonClick(d._id)}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
            
              Donate
            </button> */}
            
            <Link to={{ pathname: '/donate', state: { id: d._id} }} className="btn-flat waves-effect">
                  Donate
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
                <Link to="/dashboardAlum" className="btn-flat waves-effect">
                 <i className="material-icons left">keyboard_backspace</i> Back to
                    home
                </Link>
              </div>
            </div>
          </div>
        );
      
    }
}

BrowseProjectAlum.propTypes = {

  //donate: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
  
export default connect(
    mapStateToProps
  )(withRouter(BrowseProjectAlum));

