import {
    POSTS_LOADING, POSTS_ERROR,
    POST_CREATED, POSTS_FETCHED,
    POST_RETURNED, POST_UPDATED, POST_DELETED
} from "./types";
import { returnErrors } from "../errors/actions";
import axios from "axios";

export const setLoading = () => {
    return {
        type: POSTS_LOADING
    };
};

export const createPost = post => dispatch => {
    axios.post("/api/v1/posts", post)
    .then(res => dispatch({
        type: POST_CREATED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, POSTS_ERROR));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, POSTS_ERROR))

        dispatch(returnErrors("An error occurred", 500, POSTS_ERROR));
    });
};

export const fetchPosts = () => dispatch => {
    axios.get("/api/v1/posts")
    .then(res => dispatch({
        type: POSTS_FETCHED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, POSTS_ERROR));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, POSTS_ERROR))

        dispatch(returnErrors("An error occurred", 500, POSTS_ERROR));
    });
};

export const editPost = id => dispatch => {
    axios.get(`/api/v1/posts/${id}`)
    .then(res => dispatch({
        type: POST_RETURNED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, POSTS_ERROR));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, POSTS_ERROR))

        dispatch(returnErrors("An error occurred", 500, POSTS_ERROR));
    });
};

export const updatePost = (id, post) => dispatch => {
    axios.put(`/api/v1/posts/${id}`, post)
    .then(res => dispatch({
        type: POST_UPDATED,
        payload: res.data
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, POSTS_ERROR));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, POSTS_ERROR))

        dispatch(returnErrors("An error occurred", 500, POSTS_ERROR));
    });
};

export const deletePost = id => dispatch => {
    axios.delete(`/api/v1/posts/${id}`)
    .then(() => dispatch({
        type: POST_DELETED,
        payload: id
    }))
    .catch(err => {
        if(err.response) dispatch(returnErrors(err.response.data, err.response.status, POSTS_ERROR));

        else if(err.request) dispatch(returnErrors(err.request.data, err.request.status, POSTS_ERROR))

        dispatch(returnErrors("An error occurred", 500, POSTS_ERROR));
    });
};