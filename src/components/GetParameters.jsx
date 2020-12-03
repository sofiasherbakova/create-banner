import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button, Form, Input, Card, CardBody, CardTitle} from 'reactstrap';

const Canvas = (props) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    var img = new Image();
    img.src = props.data.img;

    context.fillStyle = props.data.color;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(img, 0, 0);
  }, [props.data]);
  return(
    <div>
      <canvas className="canva" width={350} height={450} ref={canvasRef}/>
    </div>
  );
}

const GetParameters = () => {
    const [type, setType] = useState("color");
    const [color, setColor] = useState("#000000");
    const [text, setText] = useState("");
    const [img, setImage] = useState("");
    let data = {
      type : type,
      color : color,
      text : text,
      img : img
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
                    <Button className="options" color="danger">Создать!</Button>
                  </Form>
                </CardBody>
            </Card>
        </Col>
        <Col md={6} className="m-auto">
            <Canvas data={data}/>
        </Col>
      </Row>
    );
}

export default GetParameters;