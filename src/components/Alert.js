import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
    return (
      <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {props.alert}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  }
  

export default Alert;