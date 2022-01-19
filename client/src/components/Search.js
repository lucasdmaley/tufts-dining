import React, { Fragment, useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { customizationState, getCustomizationState } from "../state.js";

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
    const setCustomization = useSetRecoilState(customizationState);
    const oldCustomizationState = useRecoilValue(getCustomizationState); //local customization state
    
    const handleDefaultChange = (event) => {
        console.log(event.target.value);
    };
    
    const handleCustomChange = (event) => {
        let newCustomizationState = {};
        newCustomizationState[event.target.value] = ! oldCustomizationState[event.target.value];
        for (const [key, value] of Object.entries(oldCustomizationState)) {
            if (key != event.target.value)
                newCustomizationState[key] = value;
        }
        
        setCustomization(newCustomizationState);
    };
    
    const ifChecked = (props) => {
        return oldCustomizationState[props];
    } 
    //TODO: switch out the bottom 6 form control labels with the top 6 form control label format
    
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
                        <FormControlLabel 
                            control={<Switch value="downhill" checked={ifChecked("downhill")} />  }
                            label="Downhill" 
                        />
                        <FormControlLabel 
                            control={<Switch value="mealplan" checked={ifChecked("mealplan")} />  }
                            label="Mealplan" 
                        />
                        <FormControlLabel 
                            control={<Switch value="favorites" checked={ifChecked("favorites")} />  }
                            label="Favorites" 
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={6}>
                    <FormGroup onChange={handleCustomChange}>
                        <FormControlLabel 
                            control={<Switch value="uphill" checked={ifChecked("uphill")} />  }
                            label="Uphill" 
                        />
                        <FormControlLabel 
                            control={<Switch value="jumbocash" checked={ifChecked("jumbocash")} />  }
                            label="Jumbocash" 
                        />
                        <FormControlLabel 
                            control={<Switch value="rare_finds" checked={ifChecked("rare_finds")} />  }
                            label="Rare finds" 
                        />
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