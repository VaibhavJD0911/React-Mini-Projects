import { useRef } from "react";
import "./ThemeChanger.css";

function ThemeChanger() {
  const Color = useRef(0);

  const Blue = () => {
    Color.current = Color.current + 1;
    console.log(Color.current);
    document.body.style.background = "blue";
  };
  const Red = () => {
    Color.current = Color.current + 1;
    console.log(Color.current);
    document.body.style.background = "red";
  };
  const Yellow = () => {
    Color.current = Color.current + 1;
    console.log(Color.current);
    document.body.style.background = "yellow";
  };
  const Aqua = () => {
    Color.current = Color.current + 1;
    console.log(Color.current);
    document.body.style.background = "aqua";
  };
  const Green = () => {
    Color.current = Color.current + 1;
    console.log(Color.current);
    document.body.style.background = "green";
  };
  const Purple = () => {
    Color.current = Color.current + 1;
    console.log(Color.current);
    document.body.style.background = "purple";
  };
  
  return (
    <div className="container">
  <h1 className="heading">Press a button to change the theme</h1>


  <div className="button-row">
    <button onClick={Blue} className="btn">Blue</button>
    <button onClick={Red} className="btn">Red</button>
    <button onClick={Yellow} className="btn">Yellow</button>
    <button onClick={Aqua} className="btn">Aqua</button>
    <button onClick={Green} className="btn">Green</button>
    <button onClick={Purple} className="btn">Purple</button>
  </div>

  
</div>

  )
}
export default ThemeChanger;
