import React from "react";
import { useAppContext } from "./hooks/app-state";
import Navbar from "./components/navbar";
import Favorites from "./components/favorites";
import Search from "./components/search";
import Footer from './components/footer/footer';

const Content = () => {
  const {
    state: { activeMenu }
  } = useAppContext();

  if (activeMenu === "search") {
    return <Search />;
  }

  return <Favorites />;
};

const App = () => {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
