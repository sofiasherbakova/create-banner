import React from "react";
import './Banner.css';

const Banner = React.forwardRef((props, ref)  => {
  return(
    <div className="banner">
      <a className="link" ref={ref} href={props.data.link}>
        <div className="background" style={{background: (props.data.type === "color" ? props.data.color : `linear-gradient(to bottom, ${props.data.color}, ${props.data.secondColor})`)}}>
          {
            props.data.img !== "" && 
            <div><img className="my-image" src={props.data.img} alt="Ваше изображение"/></div>
          }
          {
            props.data.text !== "" && 
            <div className="my-text">{props.data.text}</div>
          }
        </div>
      </a>
    </div>
  );
})

export default Banner;