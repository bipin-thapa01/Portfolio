import { useEffect, useRef } from "react";
import DataCard from "./dataCard";
import "./dataCardContainer.css";

export default function DataCardContainer(props) {
  const titleRef = useRef(null);

  const { afterLeft, title } = props.data;

  const cardKeys = Object.keys(props.data).filter((key) =>
    key.startsWith("card")
  );

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.setProperty(
        "--after-height",
        `${cardKeys.length * 220}px`
      );

      titleRef.current.style.setProperty(
        "--after-left",
        `${afterLeft}px`
      );
    }
  }, [cardKeys.length, afterLeft]);

  return (
    <div className="data-card-container">
      <div className="main-title" ref={titleRef}>
        {title}
      </div>

      {cardKeys.map((key) => (
        <DataCard key={key} data={props.data[key]} />
      ))}
    </div>
  );
}