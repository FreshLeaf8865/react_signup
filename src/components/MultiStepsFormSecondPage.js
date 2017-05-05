import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../helpers/validate';
import renderDate from './renderDate';
import FooterForm from './FooterForm';

const selectors = ["From media", "From friends"];


const renderSelector = ({ input, meta: { touched, error } }) => (
  <div>
      <label className="special-label">WHERE DID YOU HERE ABOUT US</label>
      <div className="styled-select slate">
          <select {...input}>
              <option value=""></option>
              {selectors.map(val => <option value={val} key={val}>{val}</option>)}
          </select>
          {touched && error && <span>{error}</span>}
      </div>
  </div>
);

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <p className="error">{error}</p> : false;

const MultiStepsFormSecondPage = props => {
    const { handleSubmit, previousPage } = props;
    return (
      <form className="second-form" onSubmit={handleSubmit}>
          <label className="main-label">DATE OF BIRTH</label>
          <div className="date-wrapper">
              <Field
                name="birthdayDay"
                type="number"
                component={renderDate}
                placeholder="DD"
              />
              <Field
                name="birthdayMonth"
                type="number"
                component={renderDate}
                placeholder="MM"
              />
              <Field
                name="birthdayYear"
                type="number"
                component={renderDate}
                placeholder="YYYY"
              />
          </div>
          <div className="fixed-div">
              <label className="main-label">GENDER</label>
              <div className="field-wrapper-gender">
                  <label className="label-gender" onClick={() => classToggle(0)}>
                      <Field name="sex" component="input" type="radio" value="male" />
                      {' '}
                      Male
                  </label>
                  <label className="label-gender label-gender-second" onClick={() => classToggle(1)}>
                      <Field name="sex" component="input" type="radio" value="female" />
                      {' '}
                      Female
                  </label>
                  <label className="label-gender label-gender-third" onClick={() => classToggle(2)}>
                      <Field name="sex" component="input" type="radio" value="unspecified" />
                      {' '}
                      Unspecified
                  </label>
              </div>
              <Field name="sex" component={renderError} />
          </div>
          <Field name="how_hear_about_us" component={renderSelector} />
          <FooterForm
            isBack = {true}
            previousPage = {previousPage}
          />
      </form>
    );
};

const classToggle = (i) => {
    const menu = document.querySelectorAll('.label-gender');
    for (let cnt = 0; cnt < menu.length; cnt++) {
        menu[cnt].classList.remove('active');
        menu[cnt].classList.remove('active-first');
        menu[cnt].classList.remove('active-third');
    }
    switch (i) {
        case 0: menu[i].classList.add('active-first');
            break;
        case 1: menu[i].classList.add('active');
            break;
        case 2: menu[i].classList.add('active-third');
    }
}

export default reduxForm({
    form: 'multi',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
})(MultiStepsFormSecondPage);
