import React from "react";
import { Effect, SizeListener } from "./components";
import "./App.scss";

const App = () => {
  /*   const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    const newProfiles = [...profiles, profile];
    setProfiles(newProfiles); */

  return (
    <div className="app">
      <SizeListener />
    </div>
  );
};

export default App;
