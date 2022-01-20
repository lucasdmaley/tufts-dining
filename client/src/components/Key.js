import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import "./Key.css";
import KeyItem from "./KeyItem";

const Key = () => {
    return (
        <Box className="Key">
            <hr className="TopBorder"/>
            <Grid container className="Items">
                <Grid item xs={12} sx={{height: '65px'}}>
                    <h3>Key</h3>
                </Grid>
                <Grid item xs={5} className="Allergens" justifyContent="flex-start">
                    <KeyItem value="Favorite" color="Pink"/>
                    <KeyItem value="Vegetarian" color="LightGreen"/>
                    <KeyItem value="Gluten free" color="LightBrown"/>
                    <KeyItem value="Nut free" color="Brown"/>
                </Grid>
                <Grid item xs={6} className="Allergens">
                    <KeyItem value="Rare finds" color="Gold"/>
                    <KeyItem value="Vegan" color="Green"/>
                    <KeyItem value="Milk free" color="Blue"/>
                    <KeyItem value="Allergen free (all 9)" color="Red"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Key;