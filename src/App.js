import React from "react";
import "./App.css";
import Header from './head'
import Body from './body'
import Footer from './foot'
import { StyledPage } from './StyledPage';


function App() {
  return (
    <StyledPage>
      <Header />
      <Body />
      <Footer />
    </StyledPage>
  );
}

export default App;
