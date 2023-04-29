import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNewProject } from "../../actions/authActions";
import classnames from "classnames";
import Dropdown from 'react-dropdown'

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      project_creator: "",
      project_title: "",
      project_description: "",
      supervising_professor: "",
      funds_required: "",
      errors: {}
    };
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
      project_creator: this.state.project_creator,
      project_title: this.state.project_title,
      project_description: this.state.project_description,
      supervising_professor: this.state.supervising_professor,
      funds_required: this.state.funds_required
    };
    this.props.addNewProject(newProjectData,this.props.history);
  };

  render() {
    const { errors } = this.state;

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
                <b>Add new project below</b>
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
                  value={this.state.project_creator}
                  error={errors.project_creator}
                  id="project_creator"
                  type="text"
                  className={classnames("", {
                    invalid: errors.project_creator
                  })}
                />
                <label htmlFor="project_creator">Project Creator</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.project_title}
                  error={errors.project_title}
                  id="project_title"
                  type="text"
                  className={classnames("", {
                    invalid: errors.project_title
                  })}
                />
                <label htmlFor="project_title">Project Title</label>
                <span className="red-text">{errors.project_title}</span>
              </div>
              <div className="input-field col s12">
                <textarea
                  id="textarea1" class="materialize-textarea"
                  onChange={this.onChange}
                  value={this.state.project_description}
                  error={errors.project_description}
                  id="project_description"
                  type="text"
                  className={classnames("", {
                    invalid: errors.project_description
                  })}
                />
                <label htmlFor="project_description">Project Description</label>
                <span className="red-text">{errors.project_description}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.supervising_professor}
                  error={errors.supervising_professor}
                  id="supervising_professor"
                  type="text"
                  className={classnames("", {
                    invalid: errors.supervising_professor
                  })}
                />
                <label htmlFor="supervising_professor">Supervising Professor</label>
                <span className="red-text">{errors.supervising_professor}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.funds_required}
                  error={errors.funds_required}
                  id="funds_required"
                  type="number"
                  className={classnames("", {
                    invalid: errors.funds_required
                  })}
                />
                <label htmlFor="funds_required">`Fund Required`</label>
                <span className="red-text">{errors.funds_required}</span>
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
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddProject.propTypes = {
  addNewProject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addNewProject }
)(withRouter(AddProject));
