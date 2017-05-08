import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { renderDate, genderError, renderSelector } from '../helpers/formComponets';
import FooterForm from './FooterForm';
import moment from 'moment';
import {connect} from 'react-redux'

@reduxForm({
  form: 'multi',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})
@connect((state) => {
  return {
    fieldsState:{
      fields:state.form.multi.fields,
      errors:state.form.multi.syncErrors
    }
  }
})
export default class MultiStepsFormSecondPage extends React.Component {

  getDateError(){
    const {fields, errors} = this.props.fieldsState;
    if(!errors) return null;
    const {birthdayDay, birthdayMonth, birthdayYear} = fields;
    if(birthdayDay && birthdayDay.touched && errors.birthdayDay) {
      return errors.birthdayDay
    }
    if(birthdayMonth && birthdayMonth.touched && errors.birthdayMonth) {
      return errors.birthdayMonth
    }
    if(birthdayYear && birthdayYear.touched && errors.birthdayYear) {
      return errors.birthdayYear
    }
    return null;
  }

  render() {
    const {handleSubmit, previousPage} = this.props;
    const dateError = this.getDateError() ;

    return (
      <form className="second-form" onSubmit={handleSubmit}>
        <label className="main-label">
          {dateError ? <span className="error">{dateError}</span> : "DATE OF BIRTH"}
        </label>
        <div className="date-wrapper wrapper-point">
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
        <div className="fixed-div wrapper-point">
          <label className="main-label">
            <Field name="sex" component={genderError}/>
          </label>
          <div className="field-wrapper-gender">
            <label className="label-gender" onClick={() => classToggle(0)}>
              <Field name="sex" component="input" type="radio" value="male"/>
              {' '}
              Male
            </label>
            <label className="label-gender label-gender-second" onClick={() => classToggle(1)}>
              <Field name="sex" component="input" type="radio" value="female"/>
              {' '}
              Female
            </label>
            <label className="label-gender label-gender-third" onClick={() => classToggle(2)}>
              <Field name="sex" component="input" type="radio" value="unspecified"/>
              {' '}
              Unspecified
            </label>
          </div>
        </div>
        <Field name="how_hear_about_us" component={renderSelector} options={["From media", "From friends"]}/>
        <FooterForm
          isBack={true}
          previousPage={previousPage}
        />
      </form>
    );
  }
};





const classToggle = (i) => {
  const menu = document.querySelectorAll('.label-gender');
  for (let cnt = 0; cnt < menu.length; cnt++) {
    menu[cnt].classList.remove('active');
    menu[cnt].classList.remove('active-first');
    menu[cnt].classList.remove('active-third');
  }
  switch (i) {
    case 0:
      menu[i].classList.add('active-first');
      break;
    case 1:
      menu[i].classList.add('active');
      break;
    case 2:
      menu[i].classList.add('active-third');
  }
}

function validate(values) {
  const errors = {};
  // Birthday day
  if (!values.birthdayDay) {
    errors.birthdayDay = 'Day is Required';
  } else if (values.birthdayDay > 31 || values.birthdayDay < 1) {
    errors.birthdayDay = "Invalid Day";
  } else if (values.birthdayDay.length < 2) {
      errors.birthdayDay = "Day must be in format DD (2chars)";
  }

  // Birthday month
  if (!values.birthdayMonth) {
    errors.birthdayMonth = 'Month is Required';
  } else if (values.birthdayMonth > 12 || values.birthdayMonth < 1) {
    errors.birthdayMonth = 'Invalid Month';
  } else if (values.birthdayMonth.length < 2) {
      errors.birthdayMonth = "Month must be in format MM (2chars)";
  }

  // Birthday year
  if (!values.birthdayYear) {
    errors.birthdayYear = 'Year Is Required';
  } else if (values.birthdayYear.length != 4) {
    errors.birthdayYear = 'Invalid Year';
  } else {
    const userDate = new Date(`${values.birthdayYear}-${values.birthdayMonth}-${values.birthdayDay}`);
    const isAdult = moment(userDate, "YYYYMMDD").fromNow().split(' ')[0];
    if (parseInt(isAdult) < 18) {
      errors.birthdayYear = 'Not Adult';
    } else if (isNaN(parseInt(isAdult))) {
      errors.birthdayYear = 'You are not born';
    }
  }

  // Sex
  if (!values.sex) {
    errors.sex = 'Choose your gender';
  }
  return errors;
}

