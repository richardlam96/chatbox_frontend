import React, { Component } from 'react';
import '../styles/ServerFormModal.css';


const FormModal = (props) => {
  return (
    <div className={props.showForm}>
      <form className="server-form" onSubmit={this.handleCreateServer}>
        <div className="server-form-header">
          CREATE YOUR SERVER 
        </div>
        SERVER NAME:
        <input type="text" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    </div>

  );
}


export default FormModal;
