import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import ProductList from "./components/SoupList/ProductList";
import Toggle from "./components/Toggle/Toggle";
import { useContext, useState } from "react";
import { ThemeContext } from "./Context";
import CardList from "./components/CardList/CardList";

const App = () => {
  
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{
      background:darkMode ? "#222" : "white", 
    
      color: darkMode && "White"
    }}>

    <Toggle  />
    <Intro  />
    <About  />
    <CardList />
    <ProductList  />
    <Contact  />
   
    </div>
  )
  
  
 
};

export default App;