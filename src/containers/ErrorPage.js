'use strict';
import React from 'react';

export default class ErrorPage extends React.Component {
    render(){
        return(
            <section className="error-section">
                <div className="container">
                    <h1>Error 404</h1>
                    <h3>Page not found</h3>
                </div>
            </section>
        )
    }
}