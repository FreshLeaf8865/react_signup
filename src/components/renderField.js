import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="field-wrapper">
      {touched && error ? (
          <label className="error">{error}</label>
        ) : (
          <label>{label}</label>
      )}
      <div className="field-wrapper-input">
          <input {...input} type={type} />
      </div>
  </div>
);

export default renderField;
