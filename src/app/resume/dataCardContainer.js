import { useEffect, useRef } from "react";
import DataCard from "./dataCard";
import "./dataCardContainer.css";

export default function DataCardContainer(props) {
  const titleRef = useRef(null);

  const cardKeys = Object.keys(props.data).filter((key) =>
    key.startsWith("card")
  );

  const cards = cardKeys.map((key) => (
    <DataCard key={key} data={props.data[key]} />
  ));

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.setProperty(
        "--after-height",
        `${cardKeys.length*220}px`
      );
      titleRef.current.style.setProperty(
        "--after-left",
        `${props.data.afterLeft}px`
      );
    }

  }, [cardKeys.length]);

  return(
    <div className="data-card-container">
      <div className="main-title" ref={titleRef}>
        {props.data.title}
      </div>
      {cards}
    </div>
  );
}