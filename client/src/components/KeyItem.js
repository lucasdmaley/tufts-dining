import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import "./KeyItem.css";

const IconConditional = (props) => {
    if (props.icon === "heart") {
        return <FavoriteBorderIcon className="Pink"/>;
    } else if (props.icon === "star") {
        return <DiamondOutlinedIcon className="Gold"/>
    }
    return <div className={props.circleClass}></div>;
}

const KeyItem = (props) => {
    let circleClass = "Circle ";
    circleClass += props.color;
    
    let textShift = "";
    if (props.icon === "heart" || props.icon ==="star") {
        textShift = "IconShift";
    }
    
    return (
        <Box id="KeyItem">
            <Grid container spacing={1.5} alignItems="center">
                <Grid item>
                    <IconConditional circleClass={circleClass} icon={props.icon}/>
                </Grid>
                <Grid item>
                    <p className={textShift}>{props.value}</p>
                </Grid>
            </Grid>
        </Box>
    )
}

export default KeyItem;