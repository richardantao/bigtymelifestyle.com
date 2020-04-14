import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import PropTypes from "prop-types" 

import "./Store.scss";

class Store extends Component {
    state = {

    };

    static propTypes = {

    };  

    componentDidMount() {

    };

    componentDidUpdate(prevProps, prevState) {
        const { } = this.props;
        
    };  
    
    render() {
        const { } = this.props;

        return (
            <>
                <Helmet>
                    <meta name="description" content=""/>
                    <meta name="keywords" content=""/>
                    <title>Store</title>
                </Helmet>
                <main role="main" id="blog">

                </main>
            </>
        );
    };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Store);