import React, { useState } from "react";
import { Row, Col, Button, Form, Label, Input, Container, Card, CardBody} from 'reactstrap';


const CreateImg = () => {
    const [color, setColor] = useState(null);

    return (
      <Col md={6} className="m-auto">
        <canvas></canvas>
      </Col>
    );
}

export default CreateImg;

/*
  function rect(props) {
      const {ctx, x, y, width, height} = props;
      ctx.fillRect(x, y, width, height);
  }
*/