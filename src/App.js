import React, { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";

export const App = () => {

  return (
    <div className="app">
      <Header />
      <Form />
    </div>
  );
};
