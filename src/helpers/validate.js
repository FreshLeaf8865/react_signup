import moment from 'moment';

const validate = values => {
    const errors = {};

    // Email
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // Passwords
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Password length must be more then 5 symbols';
    }
    if (!values.confirm) {
        errors.confirm = 'Required';
    } else if (values.confirm !== values.password) {
        errors.confirm = 'Passwords must be compared';
    }

    // Birthday day
    if (!values.birthdayDay) {
        errors.birthdayDay = 'Required';
    } else if (values.birthdayDay > 31 || values.birthdayDay < 1) {
        errors.birthdayDay = 'Invalid';
    } else if (values.birthdayDay.length < 2) {
        errors.birthdayDay = 'Invalid';
    }

    // Birthday month
    if (!values.birthdayMonth) {
        errors.birthdayMonth = 'Required';
    } else if (values.birthdayMonth > 12 || values.birthdayMonth < 1) {
        errors.birthdayMonth = 'Invalid';
    } else if (values.birthdayMonth.length < 2) {
        errors.birthdayMonth = 'Invalid';
    }

    // Birthday year
    if (!values.birthdayYear) {
        errors.birthdayYear = 'Required';
    } else if (values.birthdayYear.length != 4) {
        errors.birthdayYear = 'Invalid';
    } else {
       const userDate = new Date(`${values.birthdayYear}-${values.birthdayMonth}-${values.birthdayDay}`);
       const isAdult = moment(userDate, "YYYYMMDD").fromNow().split(' ')[0];
       debugger;
       if (parseInt(isAdult) < 18) {
           errors.birthdayYear = 'Not Adult';
       } else if (isNaN(parseInt(isAdult))){
           errors.birthdayYear = 'You are not born';
       }
    }

    // Sex
    if (!values.sex) {
        errors.sex = 'Required';
    }

    return errors;
};

export default validate;
