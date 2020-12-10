import React from "react";
import { Row, Col, Form, Input, Card, CardBody, CardTitle} from "reactstrap";
import './Form.css';

const GetParameters = ({setType, setColor, setSecondColor, setText, setImage, setLink, type, color, secondColor, text, img, link}) => {
    return (
        <Card className="mb-4 shadow-sm">
            <CardBody>
              <Form className="form">
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
                <CardTitle className="options" tag="h5">2. Добавь изображение (ссылка или DataURL)</CardTitle>
                <Input type="text" value={img} onChange={e => setImage(e.target.value)}/>
                <CardTitle className="options" tag="h5">3. Добавь текст</CardTitle>
                <Input type="text" value={text} onChange={e => setText(e.target.value)}/>
                <CardTitle className="options" tag="h5">* Ссылка для перехода (не обязательно)</CardTitle>
                <Input type="text" value={link} onChange={e => setLink(e.target.value)}/>
              </Form>
            </CardBody>
        </Card>
    );
}

export default GetParameters;