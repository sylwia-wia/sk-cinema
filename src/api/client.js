import axios from "axios";
import {setErrorMessage, setLoader} from "../redux/app/actions";
import store from "../redux/store";
import React from "react";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    });

apiClient.interceptors.request.use(config => {
    const {dispatch} = store;
    dispatch(setLoader(true));

    return config;
}, error => Promise.reject(error))

apiClient.interceptors.response.use(response => {
    const {dispatch} = store;
    dispatch(setLoader(false));

    return response;
}, error => {
    const {dispatch} = store;
    console.log(error.status);
    const getErrorMessage = () => {
        if(error.status = 400) {
            return "Błędnie wpisane dane! Popraw formularz!";
        }
        if(error.status = 404) {
            return "Podana strona nie istnieje!";
        }
        if(error.status = 500) {
            return "Wewnętrzny błąd serwera!";
        }
        else {
            return "Błąd!";
        }
    }
    dispatch(setErrorMessage(getErrorMessage()));

    return Promise.reject(error);
})
export default apiClient;

