import React, { useEffect, useRef } from "react";
import { Row, Col} from 'reactstrap';


const Canvas = (props) => {
  
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillStyle = '#000000';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);
  return(
    <canvas className="canva" width={350} height={450} ref={canvasRef} {...props}/>
  );
}

const CreateImg = () => {
    return (
      <Col md={6} className="m-auto">
        <Canvas/>
      </Col>
    );
}

export default CreateImg;
