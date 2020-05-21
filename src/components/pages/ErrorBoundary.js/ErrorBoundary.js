import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { logErrors } from "../../../actions/errors";

import "./ErrorBoundary.scss";

class ErrorBoundary extends Component {
    state = {
        hasErrors: false
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    };

    componentDidCatch(error) {
        const { logErrors } = this.props;
        logErrors(error);
    };

    render() {
        const { children } = this.props;
        const { hasErrors } = this.state;;

        if(!hasErrors) return children;

        return (
            <>
                <Helmet>
                    <meta name="description" content=""/>
                    <meta name="keywords" content=""/>
                    <title>400 Bad Request Error</title>
                </Helmet>
                <main role="main">

                </main>
            </>
        );
    };
};


export default connect(null, { logErrors })(ErrorBoundary);