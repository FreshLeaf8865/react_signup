
import store from '../redux/store';
import moment from 'moment';

export default function showResults() {
    const formData = store.getState().form.multi.values;
    let data = {};
    const date_of_birth = moment(`${formData.birthdayDay}/${formData.birthdayMonth}/${formData.birthdayYear}`).format('X');
    const how = formData.how_hear_about_us || null;
    data.user_data = {
        email: formData.email,
        password: formData.password,
        date_of_birth: date_of_birth,
        gender: formData.sex,
        how_hear_about_us: how
    };
    alert(JSON.stringify(data));
}
