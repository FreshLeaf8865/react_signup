import React from 'react';
import renderer from 'react-test-renderer';
import FooterForm from '../../components/FooterForm';
import MultiStepsFormFirstPage from '../../components/MultiStepsFormFirstPage';
import MultiStepsFormSecondPage from '../../components/MultiStepsFormSecondPage';
import { shallow } from 'enzyme';

test('is Footer', () => {
    const footer = renderer.create(
      <FooterForm />
    );
    let footer_tree = footer.toJSON();
    expect(footer_tree).toMatchSnapshot();
});

it('submit first form', () => {

    const wrapper = shallow(
      <MultiStepsFormFirstPage />
    );

    const footer = shallow(
      <FooterForm />
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.find('input[name="email"]').valueOf('test@mail.com');
    wrapper.find('input[name="password"]').valueOf('123456');
    wrapper.find('input[name="confirm"]').valueOf('123456');
    footer.find('.next').simulate('click');
    expect(wrapper).toMatchSnapshot();
});

it('submit second form', () => {

    const wrapper = shallow(
      <MultiStepsFormSecondPage />
    );

    const footer = shallow(
      <FooterForm />
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.find('input[name="birthdayDay"]').valueOf('11');
    wrapper.find('input[name="birthdayMonth"]').valueOf('12');
    wrapper.find('input[name="birthdayYear"]').valueOf('1991');
    wrapper.find('input[name="sex"]').valueOf('Female');
    footer.find('.next').simulate('click');
    expect(wrapper).toMatchSnapshot();
});