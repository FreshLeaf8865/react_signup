'use strict';
import '../assets/styles/main.scss'

import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <section className="content-section">
                        <div className="container">
                            {this.props.children}
                        </div>
                    </section>
                </div>
            </div>
    );
  }
}

export default Main
