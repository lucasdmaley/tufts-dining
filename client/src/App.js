import React, { Fragment } from "react";
import {
  RecoilRoot,
  //atom,
  //selector,
  //useRecoilState,
  useRecoilValue
} from 'recoil'
import './App.css';

import Menu from "./components/Menu";
import Search from "./components/Search";
import TopNavBar from "./components/TopNavBar";
import BottomNavBar from "./components/BottomNavBar";
import { StyledEngineProvider } from '@mui/material/styles';

import { getAppState } from "./state"

//import './state.js';

function MainThing() {
    if (useRecoilValue(getAppState).menu) { 
        return <Menu />;
    }
    return <Search />;
}

function KeyConditional() {
    return <div />
}

function App() {
  return (
    <StyledEngineProvider injectFirst>
        <RecoilRoot>
            <Fragment>
                <div className="container">
                    <TopNavBar />
                    <MainThing />
                    <KeyConditional />
                    <BottomNavBar />
                </div>
            </Fragment>
        </RecoilRoot>
    </StyledEngineProvider>
  );
}

export default App;
