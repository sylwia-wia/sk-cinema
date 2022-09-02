import rootReducer from './rootReducer';
import {configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

const STATE_NAME = 'CINEMA_DB';

function loadFromLocalStorage() {
    try {
        const persistedState = localStorage.getItem(STATE_NAME);
        if(persistedState === null)
            return undefined;
        return JSON.parse(persistedState);
    }
    catch (e) {
        console.warn(e);
        return undefined;
    }
}

function saveToLocalStorage(state) {
    try {
        const persistedState = JSON.stringify(state);
        localStorage.setItem(STATE_NAME, persistedState);
    }
    catch (e) {
        console.warn(e);
    }
}

const store =  configureStore ({
    reducer: rootReducer,
    preloadedState: loadFromLocalStorage(),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;

