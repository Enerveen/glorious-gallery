import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LogIn} />
      <Route path="/contacts" exact component={Contacts} />
    </BrowserRouter>
  );
};

export default App;
