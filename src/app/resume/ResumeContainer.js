import ResumeCard from "./resumeCard";
import Skills from "./skills";
import "./resumeCard.css";

export default function ResumeContainer(){
  return(
    <div className="main-container">
      <ResumeCard/>
      <Skills/>
    </div>
  );
}