import React, { Component } from 'react';
import MultiStepsFormFirstPage from '../components/MultiStepsFormFirstPage';
import MultiStepsFormSecondPage from '../components/MultiStepsFormSecondPage';
import MultiStepsFormThirdPage from '../components/MultiStepsFormThirdPage';

class MultiStepsForm extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1,
            title: 'SignUp',
            progressWidth: 33.3
        };
    }

    nextPage() {
        const { page, progressWidth  } = this.state;
        if (page > 1 ) {
            this.setState({ page: page + 1, progressWidth: progressWidth + 33.3, title: 'Thank you!' });
        } else {
            this.setState({ page: page + 1, progressWidth: progressWidth + 33.3 });
        }
    }

    previousPage() {
        this.setState({ page: this.state.page - 1, progressWidth: this.state.progressWidth - 33.3 });
    }

    render() {
        const { page, title, progressWidth } = this.state;
        return (

          <div className="form-wrapper">
              <div className="form-header">
                  <h3>{title}</h3>
              </div>
              <div className="progressbar-wrapper">
                  <div className="progressbar" style={{width: progressWidth+'%'}}></div>
              </div>
              {page === 1 && <MultiStepsFormFirstPage onSubmit={this.nextPage} />}
              {page === 2 &&
              <MultiStepsFormSecondPage
                previousPage={this.previousPage}
                onSubmit={this.nextPage}
              />}
              {page === 3 &&
              <MultiStepsFormThirdPage
                previousPage={this.previousPage}
              />}
          </div>
        );
    }
}

export default MultiStepsForm;
