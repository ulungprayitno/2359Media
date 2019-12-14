import React from "react";
import GlobalStyles from "./assets/styles";
import App from "./app";
import { AppContext, useAppState } from "./hooks/app-state";

const Root = () => {
  const { state, actions } = useAppState();
  return (
    <>
      <GlobalStyles />
      <AppContext.Provider value={{ state, actions }}>
        <App />
      </AppContext.Provider>
    </>
  );
};

export default Root;
