import "./dataCardContainer.css";

export default function DataCard(props){

  return(
    <div
      className="card"
      style={{ marginLeft: `${props.data.margin}px` }}
    >
      <div className="date">
        {props.data.date}
      </div>
      <div className="title">
        {props.data.title}
      </div>
      <div className="card-description">
        {props.data.description}
      </div>
    </div>
  );
}