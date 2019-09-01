import React from "react";
import "./App.css";
import { StyledPage } from './StyledPage';
import Header from './head'
import Body from './body'
import Footer from './foot'


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
