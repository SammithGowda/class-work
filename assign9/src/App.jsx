import { useContext, useState } from "react";
import "./App.css";
import { Toogle } from "./components/Authentication/Toggleauth";
import { Button } from "./components/Navebar/Button";
import { Auth } from "./Context/AuthContext";
function App() {
  const { boolen } = useContext(Auth);

  console.log(boolen, "in app.jsx");

  return <div className="App">{boolen ? <Button /> : <Toogle />}</div>;
}

export default App;
