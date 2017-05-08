import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { renderField } from '../helpers/formComponets'
import FooterForm from './FooterForm';



@reduxForm({
  form: 'multi',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})
export default class MultiStepsFormFirstPage extends React.Component{
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="first-form">
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
        <Field
          name="confirm"
          type="password"
          component={renderField}
          label="Confirm Password"
        />
        <FooterForm />
      </form>
    );
  }
};

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email Is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Passwords
  if (!values.password) {
    errors.password = 'Password Is Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password length must be more then 5 symbols';
  }
  if (values.confirm !== values.password) {
    errors.confirm = 'Passwords must be compared';
  }
  return errors;
}


