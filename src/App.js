import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Card from './componants/card';
function App() {
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
           <Card price='0'/>
           <Card price='9'/>
           <Card price='49'/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
