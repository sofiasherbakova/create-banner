import React from "react";
import './Banner.css';

const Banner = React.forwardRef((props, ref)  => {
  return(
    <div ref={ref} className="background" style={{background: (props.data.type === "color" ? props.data.color : `linear-gradient(to bottom, ${props.data.color}, ${props.data.secondColor})`)}}>
      <img className="my-image" src={props.data.img} alt="Ваше изображение"/>
      <div className="my-text">{props.data.text}</div>
    </div>
  );
})

export default Banner;