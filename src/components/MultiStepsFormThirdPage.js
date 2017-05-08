import React from 'react';
import showResults from '../helpers/showResult';

const MultiStepsFormThirdPage = props => {
    return (
      <div className="third-form">
          <img className="done-img" src={require('../assets/img/done.png')} alt="Done Logo"/>
          <button onClick={showResults}>
              Go to Dashboard
              <img src={require('../assets/img/right-arrow.svg')} alt=""/>
          </button>
      </div>
    );
};
export default MultiStepsFormThirdPage;
