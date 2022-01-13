import React, { Fragment } from "react";
import {
  RecoilRoot //,
  //atom,
  //selector,
  //useRecoilState,
  //useRecoilValue,
} from 'recoil'
import './App.css';

import Menu from "./components/Menu";
import TopNavBar from "./components/TopNavBar";
import Search from "./components/Search";

import './state.js';

function MainThing() {
    if (false) { //TODO: update conditionoal with recoil value later
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
            </div>
        </Fragment>
    </RecoilRoot>
  );
}

export default App;
