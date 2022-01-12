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

import './state.js';

function App() {
  return (
    <RecoilRoot>
        <Fragment>
            <div className="container">
                <TopNavBar />
                <Menu />
            </div>
        </Fragment>
    </RecoilRoot>
  );
}

export default App;
