//import liraries
import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
function useInputs(initialForm) {
    console.log("initialForm : ",initialForm);
    const [form, setForm] = useState(initialForm);
    console.log("form : ", form);
    const onChnage = useCallback((keyvalue, e) => {
        setForm (form => ({...form, [keyvalue]: e}));
    }, [])
    const reset = useCallback(() => setForm(initialForm), [initialForm])
    return [form, onChnage, reset];
};

export default useInputs;
