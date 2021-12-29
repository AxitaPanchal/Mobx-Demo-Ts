import React from "react";
import "./App.css";
import Home from "Components/home";
import MyStore from "./Store/Store";
import { observer } from "mobx-react-lite";

const store = new MyStore();
function App() {
  return (
    <div className="App">
      <Home store={store} />
    </div>
  );
}

export default observer(App);
