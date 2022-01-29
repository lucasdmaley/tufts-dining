//TopNavBar
//Modified from MUI example

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useSetRecoilState, useRecoilValue } from "recoil";
import { appState, getAppState, customizationState, getCustomizationState } from "../state"

import "./TopNavBar.css";

export default function TopNavBar() {
  //store state locally
  const [value, setValue] = React.useState(0);
  const setAppState = useSetRecoilState(appState);
  const currAppState = useRecoilValue(getAppState);
  const setCustomizationState = useSetRecoilState(customizationState);
  const oldCustomizationState = useRecoilValue(getCustomizationState);
  let commonMealTime = "";
  
  const tabs = ["Breakfast", "Lunch", "Dinner"];

  const handleChange = (event, newValue) => {
      commonMealTime = tabs[newValue];
      // console.log("event: ");
      // console.log(event.target.ariaSelected);
      // console.log("newValue:")
      // console.log(newValue);
      // console.log("handling top nav bar change");
      setAppState({ menu: true });
      let newCustomizationState = {};
      newCustomizationState.meal_time = tabs[newValue];
      for (const [key, value] of Object.entries(oldCustomizationState)) {
          if (key != "meal_time")
            newCustomizationState[key] = value;
      }
      setCustomizationState(newCustomizationState);
      setValue(newValue);
  };
  
  // const handleClick = (event) => {
  //     // if already selected
  //     if (event.target.ariaSelected) {
  // 
  //     }
  // };
  
  // if (!currAppState.menu && !currAppState.navUpdated) {
  //     handleChange(null, 3)
  //     setAppState({ menu: false, navUpdated: true });
  //     console.log("it's on the search")
  // } else {
  //     //handleChange(null, 3)
  //     console.log("it's on the menu and nav's been updatedd")
  // }
  //console.log(currAppState);
  

  return (
    <Box className="TopNavBar">
      <Tabs value={value} onChange={handleChange} centered sx={{'& .MuiTabs-flexContainer': {justifyContent: 'space-evenly', }, }}>
        <Tab label="Breakfast" sx={{height: '8vh', fontSize: '15px', color: 'rgba(0, 0, 0, 1)'}}/>
        <Tab label="Lunch" sx={{height: '8vh', fontSize: '15px', color: 'rgba(0, 0, 0, 1)'}}/>
        <Tab label="Dinner" sx={{height: '8vh', fontSize: '15px', color: 'rgba(0, 0, 0, 1)'}}/>
      </Tabs>
      <hr className="BottomBorder"/>
    </Box>
  );
}