import React, { Component } from 'react';


class ModalForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textInput: '',
			errorMessage: '',
		};
	}

	componentWillUnmount() {
		this.handleClear();
	}

	handleChange = (e) => {
		this.setState({
			textInput: e.target.value,
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		if (!this.state.textInput) {
			this.setState({
				errorMessage: 'Not a valid ' + this.props.objectName + ' name',
			});
			return;
		} 

		await this.props.onSubmit(this.state.textInput);
		if (this.props.error.exists) {
			if (this.props.error.status === 11000) {
				this.setState({
					errorMessage: 'That ' + this.props.objectName + ' name already exists',
				});
			} else {
				this.setState({
					errorMessage: 'Something went wrong.',
				});
			}
			return;
		}
		this.props.onToggle();
	}

	handleClear = () => {
		this.setState({
			textInput: '',
		});
	}

	render() {

		let {
			objectName,
			onToggle
		} = this.props;

		
		return (
			<div className="modal">
				<form className="modal-form" onSubmit={this.handleSubmit}>

					<div className="modal-form-header">
						Create your {objectName} 
					</div>

					<div className="modal-form-content">
						{objectName} name:
						<div className="modal-form-error">
							{this.state.errorMessage}
						</div>
						<input 
							type="text" 
							onChange={this.handleChange} 
							value={this.state.textInput} 
							placeholder={"Enter a " + objectName + " here."}
						/>
					</div>

					<div className="modal-form-footer">
						<button type="button" className="modal-form-link" onClick={onToggle}>
							<i className="fa fa-arrow-left"></i> Back
						</button>
						<button className="modal-form-submit">Submit</button>
					</div>

				</form>
			</div>
		);
	}
}

export default ModalForm;
