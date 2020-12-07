import React, { useState, useRef , useEffect} from "react";
import { Row, Col, Button, Form, Input, Card, CardBody, CardTitle, Label} from "reactstrap";

const Buttons = (props) => {
  return(
    <div className="MyButtons">
      <Button color="primary">Сохранить в PNG</Button>{' '}
      <Button color="primary">Скопировать JSX</Button>{' '}
      <Button color="primary">Скопировать JSON</Button>
    </div>
  );
}

const MyText = (props) => {
  return(
    <div className="MyText">
      {props.props.data.text}
    </div>
  );
}

const MyImage = (props) => {
  return(
    <div className="MyImage">
      <img src={props.props.data.img} alt="Your image"/>
    </div>
  );
}

const Background = (props) => {
  return(
    <div style={{background: (props.data.type === "color" ? props.data.color : `linear-gradient(to bottom, ${props.data.color}, ${props.data.secondColor})`)}} className="Background">
      <MyImage props={props}/>
      <MyText props={props}/>
    </div>
  );
}

const GetParameters = () => {
    const [type, setType] = useState("color");
    const [color, setColor] = useState("#000000");
    const [secondColor, setSecondColor] = useState("#000000");
    const [text, setText] = useState("Your text");
    const [img, setImage] = useState("https://cs7.pikabu.ru/post_img/big/2019/04/29/8/1556545846165742373.png");

    let data = {
      type : type,
      color : color,
      secondColor : secondColor,
      text : text,
      img : img, 
    }
    
    var el = useRef();
    console.log("ggggggggg", el);
    var tex = el.outerHTML;

    return (
      <div ref={el}>
        <Row>
          <Col md={6} className="m-auto">
              <Card className="mb-4 shadow-sm">
                  <CardBody>
                    <Form>
                      <CardTitle className="options" tag="h5">1. Выбери заливку</CardTitle>
                      <Row>
                        <Col>
                          <Input type="select" name="type" onChange={e => setType(e.target.value)}>
                            <option value="color">Цвет</option>
                            <option value="gradient">Градиент</option>
                          </Input>
                        </Col>
                        <Col>
                          <Input type="color" value={color} onChange={e => setColor(e.target.value)}/>
                        </Col>
                        <Col>
                          {
                            type === "gradient" && 
                            <Input type="color" value={secondColor} onChange={e => setSecondColor(e.target.value)}/>
                          }
                        </Col>
                      </Row>
                      <CardTitle className="options" tag="h5">2. Добавь изображение (ссылка или DataURI)</CardTitle>
                      <Input type="text" value={img} onChange={e => setImage(e.target.value)}/>
                      <CardTitle className="options" tag="h5">3. Добавь текст</CardTitle>
                      <Input type="text" value={text} onChange={e => setText(e.target.value)}/>
                      <Label></Label>
                    </Form>
                  </CardBody>
              </Card>
          </Col>
          <Col md={6} className="m-auto">
              <Background data={data}/>
          </Col>
        </Row>
        <Row>
        <Button color="primary" onClick={console.log("ggg", tex)}>Скопировать JSX</Button>
          <Buttons/>
        </Row>
      </div>
    );
}

export default GetParameters;