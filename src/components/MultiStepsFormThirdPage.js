import React from 'react';
import showResults from '../helpers/ShowResults';

const MultiStepsFormThirdPage = props => {
    return (
      <div className="third-form">
          <img className="done-img" src="/src/img/done.png" alt=""/>
          <button onClick={showResults}>
              Go to Dashboard
              <img src="/src/img/right-arrow.svg" alt=""/>
          </button>
      </div>
    );
};
export default MultiStepsFormThirdPage;
