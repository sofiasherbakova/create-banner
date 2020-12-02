import './App.css';
import GetParameters from "./components/GetParameters.jsx"
import CreateImg from "./components/CreateImg.jsx"
import React, { useState } from "react";
import { Row, Container} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container className="container">
          <GetParameters/>
      </Container>
    </div>
  );
}

export default App;
