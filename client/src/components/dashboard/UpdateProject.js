import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import axios from 'axios';

class UpdateProject extends Component {
  constructor() {
    super();
    this.state = {
      project_creator: "",
      project_title: "",
      project_description: "",
      funds_required: "",
      errors: {}
    };
  }

  componentDidMount() {
    this.setState({ project_creator: this.props.location.state.project.project_creator });
    this.setState({ project_title: this.props.location.state.project.project_title });
    this.setState({ project_description: this.props.location.state.project.project_description });
    this.setState({ funds_required: this.props.location.state.project.funds_required });

    }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

 
  onSubmit = e => {
    e.preventDefault();

    const newProjectData = {
      project_id: this.props.location.state.project._id,
      project_title: this.state.project_title,
      project_description: this.state.project_description,
      funds_required: this.state.funds_required
    };

    console.log(newProjectData);
    axios
    .post("/api/users/updateProject", newProjectData)
    .then(res => this.props.history.push("/dashboardStudent"))
    .catch(err => console.log(err));
    // this.props.addNewProject(newProjectData,this.props.history);
  };

  render() {
    const { errors } = this.state;
    const {project} = this.props.location.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Update the details below</b>
              </h4>
              {/*
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
              */}
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <p><b>Project Creator:</b></p>
                <input
                  onChange={this.onChange}
                  value={this.state.project_creator || project.project_creator}
                  error={errors.project_creator}
                  id="project_creator"
                  type="text"
                  className={classnames("", {
                    invalid: errors.project_creator
                  })}
                />
                {/* <label htmlFor="project_creator">Project Creator</label> */}
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                 <p><b>Project Title:</b></p>
                <input
                  onChange={this.onChange}
                  value={this.state.project_title || project.project_title}
                  error={errors.project_title}
                  id="project_title"
                  type="text"
                  className={classnames("", {
                    invalid: errors.project_title
                  })}
                />
                {/* <label htmlFor="project_title">Project Title</label> */}
                <span className="red-text">{errors.project_title}</span>
              </div>
              <div className="input-field col s12">
                <p><b>Project Description:</b></p>
                <textarea
                  id="textarea1" class="materialize-textarea"
                  onChange={this.onChange}
                  value={this.state.project_description || project.project_description}
                  error={errors.project_description}
                  id="project_description"
                  type="text"
                  className={classnames("", {
                    invalid: errors.project_description
                  })}
                />
                {/* <label htmlFor="project_description">Project Description</label> */}
                <span className="red-text">{errors.project_description}</span>
              </div>


              <div className="input-field col s12">
                <p><b>Funds Required:</b></p>
                <input
                  onChange={this.onChange}
                  value={this.state.funds_required || project.funds_required}
                  error={errors.funds_required}
                  id="funds_required"
                  type="number"
                  className={classnames("", {
                    invalid: errors.funds_required
                  })}
                />
                {/* <label htmlFor="funds_required">`Fund Required`</label> */}
                <span className="red-text">{errors.funds_required }</span>
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
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProject.propTypes = {
  UpdateProject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps
)(withRouter(UpdateProject));
