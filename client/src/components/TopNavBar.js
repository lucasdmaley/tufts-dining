//TopNavBar
//Modified from MUI example

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useSetRecoilState, useRecoilValue } from "recoil";
import { appState, customizationState, getCustomizationState } from "../state"

import "./TopNavBar.css";

export default function TopNavBar() {
  const [value, setValue] = React.useState(0);
  const setAppState = useSetRecoilState(appState);
  const setCustomizationState = useSetRecoilState(customizationState);
  const oldCustomizationState = useRecoilValue(getCustomizationState);
  const tabs = ["Breakfast", "Lunch", "Dinner"];

  const handleChange = (event, newValue) => {
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