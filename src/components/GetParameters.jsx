import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button, Form, Input, Card, CardBody, CardTitle, Label} from 'reactstrap';

const MyText = (props) => {
  console.log(props);
  return(
    <div className="MyText">
      {props.props.data.text}
    </div>
  );
}

const MyImage = (props) => {

  return(
    <div className="MyImage">
      <img src={props.props.data.img}/>
    </div>
  );
}

const Background = (props) => {

  return(
    <div style={{backgroundColor: props.data.color}} className="Background">
      <MyImage props={props}/>
      <MyText props={props}/>
    </div>
  );
}

const GetParameters = () => {
    const [type, setType] = useState("color");
    const [color, setColor] = useState("#000000");
    const [text, setText] = useState("Your text");
    const [img, setImage] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.ru%2Fpin%2F376261743866615679%2F&psig=AOvVaw1eZBSmaw0uC2wEwMC6Liy3&ust=1607191047195000&source=images&cd=vfe&ved=2ahUKEwiW4fOs87TtAhVHlYsKHbLAA-YQr4kDegUIARDNAQ");

    let data = {
      type : type,
      color : color,
      text : text,
      img : img, 
    }

    return (
      <Row>
        <Col md={6} className="m-auto">
            <Card className="mb-4 shadow-sm">
                <CardBody>
                  <Form>
                    <CardTitle className="options" tag="h5">1. Выбери заливку</CardTitle>
                    <Row>
                      <Col>
                        <Input type="select" name="type" onChange={e => setType(e.target.value)}>
                          <option value="color">Сплошной цвет</option>
                          <option value="gradient">Градиент</option>
                        </Input>
                      </Col>
                      <Col><Input type="color" value={color} onChange={e => setColor(e.target.value)}/></Col>
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
    );
}

export default GetParameters;