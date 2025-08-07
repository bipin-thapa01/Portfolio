import "./skills.css";

export default function Skills(){
  return(
    <div className="skills-container">
      <h3>My Skills</h3>
      <div className="detail-container">
        <div className="language">
          Language
        </div>
        <div className="lang">
          <div className="js-p">85%</div>
          <div className="js">JavaScript</div>
        </div>
        <div className="react lang">
          <div className="react-p">70%</div>
          <div className="react">React</div>
        </div>
        <div className="python lang">
          <div className="python-p">50%</div>
          <div className="python">Python</div>
        </div>
        <div className="java lang">
          <div className="java-p">50%</div>
          <div className="java">Java</div>
        </div>
      </div>
    </div>
  );
}