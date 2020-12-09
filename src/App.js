import './App.css';
import React, {useState, useRef} from "react";
import {Container, Row, Col, Button} from 'reactstrap';
import html2canvas from 'html2canvas';
import GetParameters from "./components/Form/Form.jsx"
import Banner from "./components/Banner/Banner.jsx"

function App() {
  const [type, setType] = useState("color");
  const [color, setColor] = useState("#000000");
  const [secondColor, setSecondColor] = useState("#000000");
  const [text, setText] = useState("Ваш текст будет здесь");
  const [img, setImage] = useState("https://cs7.pikabu.ru/post_img/big/2019/04/29/8/1556545846165742373.png");
  let ref = useRef();

  let data = {
    type : type,
    color : color,
    secondColor : secondColor,
    text : text,
    img : img, 
  }

  function copyHTML() {
    navigator.clipboard.writeText(ref.current.outerHTML)
    .then(() => {
      alert('Сopy!');
    })
    .catch(err => {
      alert('Error! :(');
    });
  }
  
  function copyJSON() {
    navigator.clipboard.writeText(JSON.stringify(data))
    .then(() => {
      alert('Сopy!');
    })
    .catch(err => {
      alert('Error! :(');
    });
  }

  function savePNG() {
    html2canvas(ref.current).then(function(canvas) {
      const a = document.createElement('a');
      a.style.display = 'none';
      a.download = "name";
      a.href = canvas.toDataURL('image/png');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      });
  }

  return (
    <div className="App">
      <Container className="container">
        <Row>
          <Col>
            <GetParameters              
              setType={e => setType(e)}
              setColor={e => setColor(e)}
              setSecondColor={e => setSecondColor(e)}
              setText={e => setText(e)}
              setImage={e => setImage(e)}
              type={type}
              color={color}
              secondColor={secondColor}
              img={img}
              text={text}/>
          </Col>
          <Col>
              <Banner ref={ref} data={data}/>
          </Col>
        </Row>
        <Row className="buttons">
          <div>
            <Button size="lg" color="info" onClick={savePNG}>Сохранить в PNG</Button>{' '}
            <Button size="lg" color="info" onClick={copyHTML}>Скопировать HTML</Button>{' '}
            <Button size="lg" color="info" onClick={copyJSON}>Скопировать JSON</Button>
          </div>
        </Row>  
      </Container>
    </div>
  );
}

export default App;
