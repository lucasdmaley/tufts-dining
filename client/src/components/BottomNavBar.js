//BottomNavBar
//Modified from MUI example

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./BottomNavBar.css";

import { useSetRecoilState, useRecoilValue } from "recoil";
import { appState, getAppState } from "../state.js"

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);
  const setAppState = useSetRecoilState(appState);
  const currAppState = useRecoilValue(getAppState);

  const handleChange = (event, newValue) => {
    console.log("handling bottom nav");
    setAppState({ menu: false });
    console.log(currAppState);
    setValue(newValue)
  };
  
  //NB: doesn't work! registers previos value of nav bar
  const handleClick = () => {
      if (value == 1) {
          console.log("clicked key!");
      }
  }
  
  // \/ didn't work, whole nav bar doesn't update onChange
  // React.useEffect(() => {
  //     console.log("bruh");
  //     return () => {
  //         console.log("hello");
  //     };
  // }, []);

  return (
    <Box className="BottomNavBar" sx={{ width: '100%'}}>
      <hr className="TopBorder"/>
      <Tabs id="bottom" value={value} onChange={handleChange} onClick={handleClick} sx={{'& .MuiTabs-flexContainer': {justifyContent: 'space-evenly', }, }}>
        <Tab label="Change Search Parameters" sx={{height: '8vh', fontSize: '15px', color: 'rgba(0, 0, 0, 1)'}}/>
        <Tab label="Key" sx={{height: '8vh', fontSize: '15px', color: 'rgba(0, 0, 0, 1)'}}/>
      </Tabs>
    </Box>
  );
}

export default BottomNavBar;
