import React from "react";

import { Scrollbars } from "react-custom-scrollbars";

import "./App.css";
import Routes from "./Routes";


const App: React.FC = () => {
  return (
    <>
      <Scrollbars autoHide style={{ height: "100vh", width: "100vw" }}>
        <Routes />
      </Scrollbars>
    </>
  );
};

export default App;
