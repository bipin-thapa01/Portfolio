import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import "./slider.css";

const icons = [
  <FaPython className="slider-logo" />,
  <IoLogoJavascript className="slider-logo" />,
  <FaReact className="slider-logo" />,
  <FaNodeJs className="slider-logo" />,
  <FaJava className="slider-logo" />,
  <TbBrandCpp className="slider-logo" />,
];

export default function Slider() {
  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        {[...icons, ...icons]}
      </div>
    </div>
  );
}