import React, { Component } from 'react';
import { registerUser } from '../store/actions/auth';


class AuthForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	handleSubmit = e => {
		console.log(this.props);
		e.preventDefault();
		this.props.registerUser(this.state).then(() => {
			this.props.history.push("/");
		});
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
		return (
			<div className="signin">
				<form onSubmit={this.handleSubmit}>
					<p>Username</p>
					<input 
						type="text" 
						name="username"
						onChange={this.handleChange}
					/>
					<p>Password</p>
					<input 
						type="text" 
						name="password"
						onChange={this.handleChange}
					/>
					<button>
						{this.props.text}
					</button>
				</form>
			</div>
		);
	}
}


export default AuthForm;
