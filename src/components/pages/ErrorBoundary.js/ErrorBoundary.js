import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./ErrorBoundary.scss";

class ErrorBoundary extends Component {
    state = {
        hasErrors: false
    };

    static propTypes = {
        error: PropTypes.object.isRequired
    };

    render() {
        const { children } = this.props;

        if(false) {
            return (
                <>
                    <Helmet>
                        <title>400 Bad Request Error</title>    
                    </Helmet> 
                    <main role="main">

                    </main>
                </>
            ) 
        } else return children; 
    };
};

const mapStateToProps = state => ({
    error: state.error  
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);