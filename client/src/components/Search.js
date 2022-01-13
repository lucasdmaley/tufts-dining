import React, { Fragment, useEffect, useState } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import "./Search.css";

const Search = () => {
    
    const handleDefaultChange = (event) => {
        console.log(event.target.value);
    };
    
    const handleCustomChange = (event) => {
        console.log(event.target.value);
    };
    
    return (
        <Box className="Search">
            <Grid container>
                <Grid item xs={12}>
                    <h3>Recommended Defaults:</h3>
                    <RadioGroup defaultValue="mealplan" onChange={handleDefaultChange}>
                        <FormControlLabel value="mealplan_only" control={<Radio />} label="Mealplan only" />
                        <FormControlLabel value="favorites_only" control={<Radio />} label="Favorites only" />
                        <FormControlLabel value="rare_finds_only" control={<Radio />} label="Rare finds only" />
                        <FormControlLabel value="downhill_only" control={<Radio />} label="Downhill only" />
                        <FormControlLabel value="vegetarian_only" control={<Radio />} label="Vegetarian only" />
                    </RadioGroup>
                </Grid>
                
                <Grid item xs={12}>
                    <h3>Full Customization:</h3>
                </Grid>
                <Grid item xs={6}>
                    <FormGroup onChange={handleCustomChange}>
                        <FormControlLabel value="downhill" control={<Switch />} label="Downhill" />
                        <FormControlLabel value="mealplan" control={<Switch />} label="Mealplan" />
                        <FormControlLabel value="favorites" control={<Switch />} label="Favorites" />
                    </FormGroup>
                </Grid>
                <Grid item xs={6}>
                    <FormGroup onChange={handleCustomChange}>
                        <FormControlLabel value="uphill" control={<Switch />} label="Uphill" />
                        <FormControlLabel value="jumbocash" control={<Switch />} label="JumboCash" />
                        <FormControlLabel value="rare_finds" control={<Switch />} label="Rare finds" />
                    </FormGroup>
                </Grid>
                
                <Grid item xs={12}>
                    <h3>Sort by Allergen:</h3>
                </Grid>
                <Grid item xs={6}>
                    <FormGroup onChange={handleCustomChange}>
                        <FormControlLabel value="vegetarian" control={<Switch />} label="Vegetarian" />
                        <FormControlLabel value="gluten_free" control={<Switch />} label="Gluten free" />
                        <FormControlLabel value="nut_free" control={<Switch />} label="Nut free" />
                    </FormGroup>
                </Grid>
                <Grid item xs={6}>
                    <FormGroup onChange={handleCustomChange}>
                        <FormControlLabel value="vegan" control={<Switch />} label="Vegan" />
                        <FormControlLabel value="milk_free" control={<Switch />} label="Milk free" />
                        <FormControlLabel value="allergen_free" control={<Switch />} label="Allergen free" />
                    </FormGroup>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Search;