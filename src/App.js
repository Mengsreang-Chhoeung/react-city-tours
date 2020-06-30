import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
