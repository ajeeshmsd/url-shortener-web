import React, { useState } from "react";
import { Welcome } from "./components/pages/welcome";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    loggedIn
      ? (<>Home</>) 
      : (<Welcome setLoggedIn={setLoggedIn} />)
  );
}

export default App;
