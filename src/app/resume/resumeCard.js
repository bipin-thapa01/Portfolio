import DataCardContainer from "./dataCardContainer";
import "./resumeCard.css";

export default function ResumeCard(){

  let data = {
    data1: {
        title: "Work Experiences",
        card1: {
          date: "2022 - Present",
          title: "Full Stack Web Developer",
          description: "I have been a full stack developer since 2022 A.D and am self employed. I have developed multiple dynamic websites and will continue to do so.",
          margin: "-440",
        },
        card2: {
          date: "2023 - Present",
          title: "Data Scientist",
          description: "I am currently learning data science. Artificial Intelligence and machine learning has been my main field of interest and have developed few projects regarding this field using Python.",
          margin: "440",
        },
        card3: {
          date: "2024 - Present",
          title: "Coding Tutor",
          description: "I have been teaching how to code since 2024 A.D. My teaching career started when I taught my friends basic concept related to maths.",
          margin: "-440",
        },
        card4: {
          date: "2024 - Present",
          title: "Event Organizer",
          description: "Me, alongside my friends, has hosted muliple events through out our college life. Some of the main examples are: Intra +2 Code War, Intra College Hackfest.",
          margin: "440",
        },
    }
  }


  return(
    <div className="main-container">
      <h3>
        MY RESUME
      </h3>
      <DataCardContainer data={data["data1"]}/>
    </div>
  );
}