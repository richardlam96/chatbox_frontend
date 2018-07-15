import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/AuthPage.css';


class AuthPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

  componentWillUnmount() {
    this.handleClear();
  }

  handleClear = () => {
    this.props.clearError();
    this.setState({
      username: '',
      password: '',
    });
  }

	handleSubmit = e => {
		e.preventDefault();
    let { currentUser, authMode, submitCred } = this.props;
		submitCred(authMode, this.state)
		  .then(() => {
        if (currentUser.isAuthenticated) {
          this.handleClear();
          this.props.history.push("/welcome");
        }       
      });
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

  
	render() {
    // Redirect if user is already logged in.
    if (this.props.currentUser.isAuthenticated) {
      return <Redirect to="/welcome" />;
    }

		let { 
      authMode,
      error,
		} = this.props;

		// Create Link params for alternate Auth mode.
    let heading, subheading, submitButtonText;
		let altPath, linkText;
    let terms;
		if (authMode === 'signin') {
      heading = "Welcome back!";
      subheading = "We're excited to see you again!";
      submitButtonText = "Log In";
      terms = "";
			altPath = '/register';
			linkText = 'Register';
		} else if (authMode === 'register') {
      heading = "Create an account";
      subheading = "";
      submitButtonText = "Continue";
      terms = "By registering, you agree to buying me donuts everyday."
			altPath = '/signin';
			linkText = 'Sign in';
		} else {
      // If another route is caught, redirect to that route.
			return (<Redirect to="/{authMode}" />);
		}

    // Show any error messages.
    let errorMessage;
    if (error.exists) {
      errorMessage = error.message;
    }

		return (
			<div className="authpage">
        <div className="header">
          <i class="fa fa-gamepad" aria-hidden="true"></i>Drocsid
        </div>
        <div className="authform-wrapper">
          <form className="authform" onSubmit={this.handleSubmit}>
            <div className="inner-wrapper">
              <div className="heading">
                {heading}
              </div>
              <div className="subheading">
                {subheading}
              </div>
              <h5>USERNAME</h5>
              <input 
                type="text"
                name="username"
                onChange={this.handleChange}
              />
              <h5>PASSWORD</h5>
              <input 
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              <a className="redirect-link">Forgot your password?</a>
              <button type="submit">{submitButtonText}</button>
              <span className="redirect">
                <span>Need an account? </span>
                <Link 
                  to={altPath}
                  onClick={this.handleClear}
                  className="redirect-link">
                  {linkText}
                </Link>
              </span>
              <span className="redirect">{terms}</span>
            </div>
          </form>
        </div>
			</div>
		);
	}
}


export default AuthPage;
