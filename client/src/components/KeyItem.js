import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./KeyItem.css";

const KeyItem = (props) => {
    let circleClass = "Circle ";
    circleClass += props.color;
    
    return (
        <Box id="KeyItem">
            <Grid container spacing={1.5} alignItems="center">
                <Grid item>
                    <div className={circleClass}></div>
                </Grid>
                <Grid item>
                    <p>{props.value}</p>
                </Grid>
            </Grid>
        </Box>
    )
}

export default KeyItem;