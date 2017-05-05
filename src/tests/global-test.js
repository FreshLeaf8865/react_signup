const React = require('react');
const TestUtils = require('react-dom/test-utils');
const expect = require('expect');
import FooterForm from '../components/FooterForm';
import MainComponent from '../components/MainComponent';
import MultiStepsFormFirstPage from '../components/MultiStepsFormFirstPage';
import MultiStepsFormSecondPage from '../components/MultiStepsFormSecondPage';
import MultiStepsFormThirdPage from '../components/MultiStepsFormThirdPage';

describe('app', function () {
    it('loads without problems', function () {
        require('../index');
    });
    it('renders without problems', function () {
        const root = TestUtils.isElement(<FooterForm />);
        expect(root).toExist();
    });
    it('renders without problems', function () {
        const root = TestUtils.isElement(<MainComponent />);
        expect(root).toExist();
    });
    it('renders without problems', function () {
        const root = TestUtils.isElement(<MultiStepsFormFirstPage />);
        expect(root).toExist();
    });
    it('renders without problems', function () {
        const root = TestUtils.isElement(<MultiStepsFormSecondPage />);
        expect(root).toExist();
    });
    it('renders without problems', function () {
        const root = TestUtils.isElement(<MultiStepsFormThirdPage />);
        expect(root).toExist();
    });
});