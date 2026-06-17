import { useRef, useEffect } from "react";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import "./slider.css";

const icons = [
  FaPython,
  FaFlutter,
  IoLogoJavascript,
  FaReact,
  FaNodeJs,
  FaJava,
  TbBrandCpp,
];

const DURATION = 30;

export default function Slider() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const dragState = useRef({ isDragging: false, startX: 0, animOffset: 0, currentOffset: 0 });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;

    const getTranslateX = () => {
      const matrix = new DOMMatrix(getComputedStyle(container).transform);
      return matrix.m41;
    };

    const resumeAnimation = (fromOffset) => {
      const half = container.scrollWidth / 2;
      let normalized = fromOffset % half;
      if (normalized > 0) normalized -= half;
      const elapsed = Math.abs(normalized / half) * DURATION;
      container.style.transform = "";
      container.style.animation = "none";
      void container.offsetWidth;
      container.style.animation = `slide-left ${DURATION}s linear infinite`;
      container.style.animationDelay = `-${elapsed.toFixed(2)}s`;
    };

    const onMouseDown = (e) => {
      dragState.current = {
        isDragging: true,
        startX: e.clientX,
        animOffset: getTranslateX(),
        currentOffset: getTranslateX(),
      };
      wrapper.classList.add("dragging");
      container.style.animation = "none";
      container.style.transform = `translate3d(${dragState.current.animOffset}px, 0, 0)`;
    };

    const onMouseMove = (e) => {
      if (!dragState.current.isDragging) return;
      const dx = e.clientX - dragState.current.startX;
      dragState.current.currentOffset = dragState.current.animOffset + dx;
      container.style.transform = `translate3d(${dragState.current.currentOffset}px, 0, 0)`;
    };

    const onMouseUp = () => {
      if (!dragState.current.isDragging) return;
      dragState.current.isDragging = false;
      wrapper.classList.remove("dragging");
      resumeAnimation(dragState.current.currentOffset);
    };

    const onTouchStart = (e) => {
      dragState.current = {
        isDragging: true,
        startX: e.touches[0].clientX,
        animOffset: getTranslateX(),
        currentOffset: getTranslateX(),
      };
      container.style.animation = "none";
      container.style.transform = `translate3d(${dragState.current.animOffset}px, 0, 0)`;
    };

    const onTouchMove = (e) => {
      if (!dragState.current.isDragging) return;
      const dx = e.touches[0].clientX - dragState.current.startX;
      dragState.current.currentOffset = dragState.current.animOffset + dx;
      container.style.transform = `translate3d(${dragState.current.currentOffset}px, 0, 0)`;
    };

    const onTouchEnd = () => {
      dragState.current.isDragging = false;
      resumeAnimation(dragState.current.currentOffset);
    };

    wrapper.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    wrapper.addEventListener("touchstart", onTouchStart, { passive: true });
    wrapper.addEventListener("touchmove", onTouchMove, { passive: true });
    wrapper.addEventListener("touchend", onTouchEnd);

    return () => {
      wrapper.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      wrapper.removeEventListener("touchstart", onTouchStart);
      wrapper.removeEventListener("touchmove", onTouchMove);
      wrapper.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="slider-wrapper" ref={wrapperRef}>
      <div className="slider-container" ref={containerRef}>
        {icons.map((Icon, index) => (
          <div key={`a-${index}`}>
            <Icon className="slider-logo" />
          </div>
        ))}
        {icons.map((Icon, index) => (
          <div key={`b-${index}`}>
            <Icon className="slider-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}