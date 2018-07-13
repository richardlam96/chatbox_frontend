import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class AuthPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		let { match: { params } } = this.props;
		this.props.submitCred(params.authMode, this.state)
			.then(() => this.props.history.push("/welcome/user"));
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	clearState = () => {
		// !!! this does not work !!!
		console.log(this.state);
		this.setState({
			username: '', 
			password: '',
		});
	}

	render() {
		let { 
			match: { params }, 
		} = this.props;

		// Create Link to alternate Auth mode.
		let altPath, linkText;
		if (params.authMode === 'signin') {
			altPath = '/register';
			linkText = 'Register';
		} else if (params.authMode === 'register') {
			altPath = '/signin';
			linkText = 'Sign in';
		} else {
			return (<Redirect to="/" />);
		}

		return (
			<div className="authpage">
				<Link to="/">Return Home</Link>
				<p>Auth page, at: {params.authMode}</p>
				<hr />
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Username</label>
						<input 
							type="text"
							name="username"
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>Password</label>
						<input 
							type="password"
							name="password"
							onChange={this.handleChange}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
				<Link 
					to={altPath}
					onClick={this.clearState}
					>
					{linkText}
				</Link>
			</div>
		);
	}
}


export default AuthPage;
