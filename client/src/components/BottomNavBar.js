//BottomNavBar
//Modified from MUI example

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import "./BottomNavBar.css";

import { useSetRecoilState, useRecoilValue } from "recoil";
import { appState, getAppState, keyState, getKeyState } from "../state.js"

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);
  const setAppState = useSetRecoilState(appState);
  const setKeyState = useSetRecoilState(keyState);
  const currAppState = useRecoilValue(getAppState);
  const currKeyState = useRecoilValue(getKeyState);

  const handleChange = (event, newValue) => {
    console.log("handling bottom nav");
    if (newValue == 1) {
        setKeyState({ key: true })
    } else {
        setAppState({ menu: false });
        setKeyState({ key: false }) //TODO: remove blue bar when key set to false
    }
    console.log(currAppState);
    setValue(newValue)
  };
  
  //NB: doesn't work! if previous value was key, currStateKey.key is false, and 'change search params' is clicked, key becomes visible
  const handleClick = () => {
      //if the previous click was on the key
      if (currKeyState.key) {
          setKeyState({ key: false }); //TODO: remove blue bar when key set to false
      }
      //makes key visible if not already and 'key' button clicked
      if (value == 1 && !currKeyState.key) {
          setKeyState({ key: true });
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
