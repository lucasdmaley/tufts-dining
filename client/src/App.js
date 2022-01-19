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

import { getAppState } from "./state"

//import './state.js';

function MainThing() {
    if (useRecoilValue(getAppState).menu) { 
        return <Menu />;
    }
    return <Search />;
}

function App() {
  return (
    <RecoilRoot>
        <Fragment>
            <div className="container">
                <TopNavBar />
                <MainThing />
                <BottomNavBar />
            </div>
        </Fragment>
    </RecoilRoot>
  );
}

export default App;
