import React from 'react';

const FooterForm = props => {
    const { isBack, previousPage } = props;
    return (
      <div className="footer-form">
          {isBack &&
          <button type="button" className="previous" onClick={previousPage}>
              Back
          </button>
          }
          <button type="submit" className="next">
              Next
              <img src={require('../assets/img/right-arrow.svg')} alt=""/>
          </button>
      </div>
    )
}

export default FooterForm;