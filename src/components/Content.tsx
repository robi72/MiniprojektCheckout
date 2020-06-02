import React from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';


const Content = () => {
    return(
        <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <Product />
            </Grid>
        </Grid>
    );
};


export default Content;