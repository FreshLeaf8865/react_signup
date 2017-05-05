import React from 'react';

const FooterForm = props => {
    const { isBack, previousPage } = props;
    return (
      <div className="footer-form">
          <div className="next-wrapper"></div>
          {isBack &&
          <button type="button" className="previous" onClick={previousPage}>
              Previous
          </button>
          }
          <button type="submit" className="next">
              Next
              <img src="/src/img/right-arrow.svg" alt=""/>
          </button>
      </div>
    )
}

export default FooterForm;