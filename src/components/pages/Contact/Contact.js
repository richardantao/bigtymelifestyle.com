import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";

import { clearErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

import "./Contact.scss";

class Contact extends Component {
    state = {

    };

    static propTypes = {
        
    };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Contact);