import { useState, useMemo, useContext, createContext } from "react";

const initialState = {
  activeMenu: "search",
  favorites: []
};

const getActions = setState => ({
  setActiveMenu: activeMenu => {
    setState(state => ({ ...state, activeMenu }));
  },
  setFavorites: favorites => {
    setState(state => ({ ...state, favorites }));
  }
});

const useAppState = () => {
  const [state, setState] = useState(initialState);
  const actions = useMemo(() => getActions(setState), [setState]);
  return { state, actions };
};

const AppContext = createContext({});

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, useAppState, useAppContext };
