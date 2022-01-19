//BottomNavBar
//Modified from MUI example

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./BottomNavBar.css";

import { useSetRecoilState } from "recoil";
import { appState } from "../state.js"

export default function BottomNavBar() {
  const [value, setValue] = React.useState(0);
  const setAppState = useSetRecoilState(appState);

  const handleChange = (event, newValue) => {
      console.log("handling bottom nav");
    setAppState({ menu: false });
    setValue(newValue);
  };

  return (
    <Box className="BottomNavBar" sx={{ width: '100%' }}>
      <hr className="TopBorder"/>
      <Tabs value={value} onChange={handleChange} sx={{'& .MuiTabs-flexContainer': {justifyContent: 'space-evenly', }, }}>
        <Tab label="Change Search Parameters" sx={{height: '8vh', fontSize: '15px', color: 'rgba(0, 0, 0, 1)'}}/>
        <Tab label="Key" sx={{height: '8vh', fontSize: '15px', color: 'rgba(0, 0, 0, 1)'}}/>
      </Tabs>
    </Box>
  );
}