import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import "./slider.css";

const icons = [
  FaPython,
  IoLogoJavascript,
  FaReact,
  FaNodeJs,
  FaJava,
  TbBrandCpp,
];

export default function Slider() {
  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        {icons.map((Icon, index) => (
          <div key={index}>
            <Icon className="slider-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
