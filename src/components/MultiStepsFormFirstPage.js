import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../helpers/validate';
import renderField from './renderField';
import FooterForm from './FooterForm';

const MultiStepsFormFirstPage = props => {
    const { handleSubmit } = props;
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
};

export default reduxForm({
    form: 'multi',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
})(MultiStepsFormFirstPage);
