//import liraries
import React, { useState, useCallback, useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function reducer(form, action) {
    switch(action.type) {
        case 'CHANGE_INPUT':
            return {
                ...form,
                [action.name]: action.value
            }
        case 'RESET_INPUT':
            return action.initialForm
        default:
            return form;
    }
}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback((keyvalue, e) => {
        dispatch({
            type: 'CHANGE_INPUT',
            name: keyvalue,
            value: e,
        })
    })
    const reset = useCallback(()=> dispatch({
        type: 'RESET_INPUT',
        initialForm
    }), [initialForm])
    return [form,onChange,reset]
}
// create a component
// function useInputs(initialForm) {
//     console.log("initialForm : ",initialForm);
//     const [form, setForm] = useState(initialForm);
//     console.log("form : ", form);
//     const onChnage = useCallback((keyvalue, e) => {
//         setForm (form => ({...form, [keyvalue]: e}));
//     }, [])
//     const reset = useCallback(() => setForm(initialForm), [initialForm])
//     return [form, onChnage, reset];
// };

export default useInputs;
