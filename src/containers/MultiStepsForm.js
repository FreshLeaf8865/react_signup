import React, {Component} from 'react';
import MultiStepsFormFirstPage from '../components/MultiStepsFormFirstPage';
import MultiStepsFormSecondPage from '../components/MultiStepsFormSecondPage';
import MultiStepsFormThirdPage from '../components/MultiStepsFormThirdPage';

class MultiStepsForm extends Component {
  state = {
    page: 1,
    title: 'SignUp',
    progressWidth: 33.3,
    loading: false
  };


  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };


  nextPage = () => {
    const {page, progressWidth, loading} = this.state;
    if (!loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        progressWidth: progressWidth + 33.3,
        page: page + 1,
        title: page > 1 ? 'Thank you!' : 'Signup'
      }));
    }
  };

  previousPage = () => {
    const {page, progressWidth, loading} = this.state;
    if (!loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        progressWidth: progressWidth - 33.3,
        page: page - 1
      }));
    }
  };

  renderFormStep = () => {
    const {page} = this.state;
    switch (page){
      case 1:
        return <MultiStepsFormFirstPage onSubmit={this.nextPage}/>;
      case 2:
        return  <MultiStepsFormSecondPage
          previousPage={this.previousPage}
          onSubmit={this.nextPage}
        />
      case 3:
       return <MultiStepsFormThirdPage
          previousPage={this.previousPage}
        />
      default : return <span>Invalid Form State</span>
    }
  };

  render() {
    const { title, progressWidth, loading} = this.state;
    return (
      <div className="form-wrapper">
        <div className="form-header">
          <h3>{title}</h3>
        </div>
        <div className="progressbar-wrapper">
          <div className="progressbar" style={{width: progressWidth + '%'}}/>
        </div>
        <div className={`form-page-wrapper ${loading ? 'loading' : ''}`}>
          {this.renderFormStep()}
        </div>
      </div>
    );
  }
}

export default MultiStepsForm;
