import React, { useState } from "react";
import { Row, Col, Button, Form, Input, Card, CardBody, CardTitle} from 'reactstrap';

const GetParameters = () => {
    const [type, setType] = useState("color");
    const [color, setColor] = useState("#000000");
    const [text, setText] = useState("");

    const getData = () => {
      const data = {
        type : type,
        color : color,
        text : text,
        img : "img"
      }
      let json = JSON.stringify(data);
      console.log(json);
    }

    return (
      <Col md={6} className="m-auto">
          <Card className="mb-4 shadow-sm">
              <CardBody>
                <Form>
                  <CardTitle className="options" tag="h5">1. Выбери заливку</CardTitle>
                  <Row>
                    <Col>
                      <Input type="select" name="select" onChange={e => setType(e.target.value)}>
                        <option value="color">Сплошной цвет</option>
                        <option value="gradient">Градиент</option>
                      </Input>
                    </Col>
                    <Col><Input type="color" value={color} onChange={e => setColor(e.target.value)}/></Col>
                  </Row>
                  <CardTitle className="options" tag="h5">2. Добавь изображение</CardTitle>
                  <Input type="file"/>
                  <CardTitle className="options" tag="h5">3. Добавь текст</CardTitle>
                  <Input type="text" value={text} onChange={e => setText(e.target.value)}/>
                  <Button className="options" onClick={getData} color="danger">Создать!</Button>
                </Form>
              </CardBody>
          </Card>
      </Col>
    );
}

export default GetParameters;
//file - accept