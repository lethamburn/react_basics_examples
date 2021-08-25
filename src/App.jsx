import React from "react";
import { Contador } from "./components";
import "./App.scss";

const App = () => {
  /* const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    const newProfiles = [...profiles, profile];
    setProfiles(newProfiles);
  }; */

  return (
    <div className="app">
      {/* <h1>Listado de perfiles</h1>
      <Form addProfile={addProfile} />
      <ProfileCard profiles={profiles} /> */}
      <Contador />
    </div>
  );
};

export default App;
