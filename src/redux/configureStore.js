import React from 'react';
import { createStore} from 'redux';

const initialState = {
    paciente: {},
    pacientes: []

}

const reducer = (state, action) => {

}

const store = createStore(reducer, initialState);

export default store;