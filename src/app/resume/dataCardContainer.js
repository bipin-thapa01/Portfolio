import DataCard from "./dataCard";
import "./dataCardContainer.css";

export default function DataCardContainer(props){

  const cards = Object.keys(props.data)
    .filter((key) => key.startsWith("card"))
    .map((key) => {
      return <DataCard key={key} data={props.data[key]} />;
    });

  return(
    <div className="data-card-container">
      <div className="main-title">
        {props.data.title}
      </div>
      {cards}
    </div>
  );
}