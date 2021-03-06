import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Input, FormHelperText } from '@material-ui/core';


const SwishPaymentForm = () => {
    return(
    <FormControl>
        <InputLabel htmlFor="my-input">Telefonnummer</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">Ange telefonnummer som du vill betala med.</FormHelperText>
    </FormControl>
    );
};



export default SwishPaymentForm;