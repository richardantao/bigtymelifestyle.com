import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import { useSelector, useDispatch } from "react-redux";
import { clearErrors } from "../../../actions/errors";

import { Row, Col, Form, Label, Input, Alert, Button, } from "reactstrap";

import "./Contact.scss";

const Contact = () => {
    /* Local state */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    /* Store-derived entities */
    const errors = useSelector(state => state.errors);
    const dispatch = useDispatch();

    /* Effects */
    useEffect(() => {
        clearErrors();
    });

    /* Rendering */
    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>Contact</title>
            </Helmet>
            <main role="main">
                <Form>
                    { errors.message ? <Alert color="danger">{errors.message}</Alert> : null }

                    <Label>Name</Label>
                    <Input
                        name="name"
                        type="text"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />

                    <Label>Email</Label>
                    <Input
                        name="email"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />

                    <Label>Subject</Label>
                    <Input
                        name="subject"
                        type="text"
                        onChange={e => setSubject(e.target.value)}
                        value={subject}
                    />

                    <Label>Message</Label>
                    <Input
                        name="message"
                        type="textarea"
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                    />

                    <Button onClick={() => dispatch()}>
                        Send Message
                    </Button>
                </Form>
            </main>
        </>
    );
};

Contact.propTypes = {
    clearErrors: PropTypes.func
};

export default Contact;