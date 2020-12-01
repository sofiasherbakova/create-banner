import './App.css';
import GetParameters from "./components/GetParameters.jsx"
import CreateImg from "./components/CreateImg.jsx"
import React from "react";
import { Row, Container} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container className="container">
        <Row>
          <GetParameters/>
          <CreateImg/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
