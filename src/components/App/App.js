import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Launcher from "../Launcher";
import Home from "./Home";

function App() {
  return (
        <BrowserRouter>
            <Route path="/app" component={Home} />
            <Route path="/" component={Launcher} exact />
        </BrowserRouter>
  );
}

export default App;

      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      // </header>
