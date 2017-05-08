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


const renderDate = ({ input, label, type, placeholder, meta: { touched, error } }) => {
    const val = placeholder;
    if (val == "YYYY") {
        return (
        <div className="field-wrapper-date">
            <input maxLength={2} onKeyPress={(event) => {return (event.charCode == 8 || event.charCode == 0 || event.charCode == 45 || event.target.value.length > 3) ? event.preventDefault() : event.charCode >= 48 && event.charCode <= 57}} name="itemConsumption"  {...input} type={type} placeholder={placeholder} min="0"/>
        </div>
        )
    } else if (val == "MM"){
        return (
          <div className="field-wrapper-date">
              <input maxLength={2} onKeyPress={(event) => {return (event.charCode == 8 || event.charCode == 0 || event.charCode == 45 || event.target.value.length > 1) ? event.preventDefault() : event.charCode >= 48 && event.charCode <= 57}} name="itemConsumption"  {...input} type={type} placeholder={placeholder} min="0" max="12"/>
          </div>
        )
    }
    else {
        return (
          <div className="field-wrapper-date">
              <input maxLength={2} onKeyPress={(event) => {return (event.charCode == 8 || event.charCode == 0 || event.charCode == 45 || event.target.value.length > 1) ? event.preventDefault() : event.charCode >= 48 && event.charCode <= 57}} name="itemConsumption"  {...input} type={type} placeholder={placeholder} min="0" max="31"/>
          </div>
        )
    }
};

const renderSelector = ({input, meta: {touched, error}, options}) => (
  <div className="wrapper-point">
    <label className="special-label">WHERE DID YOU HERE ABOUT US</label>
    <div className="styled-select slate">
      <select {...input}>
        <option value=""></option>
        {options.map(val => <option value={val} key={val}>{val}</option>)}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const genderError = ({meta: {touched, error}}) =>
  touched && error ? <p className="error">{error}</p> : <p>GENDER</p>;


export {
  renderDate,
  renderField,
  renderSelector,
  genderError
}

