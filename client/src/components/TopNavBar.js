//TopNavBar
//Modified from MUI example

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useSetRecoilState } from "recoil";
import { appState } from "../state"

import "./TopNavBar.css";

export default function TopNavBar() {
  const [value, setValue] = React.useState(0);
  const setAppState = useSetRecoilState(appState);
  const tabs = ["Breakfast", "Lunch", "Dinner"];

  const handleChange = (event, newValue) => {
      setAppState({ menu: true });
      switch (newValue) {
          case 0:
              
      }
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