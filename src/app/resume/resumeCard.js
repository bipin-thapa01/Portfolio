import DataCardContainer from "./dataCardContainer";
import "./resumeCard.css";

export default function ResumeCard() {

  let data = {
    data1: {
      title: "Work Experiences",
      afterLeft: "86",
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
    },
    data2: {
      title: "Education",
      afterLeft: "55",
      card1: {
        date: "2021 - 2022",
        title: "+2 in Science",
        description: "I did +2 in science with computer science as my major. I studied at Kathmandu Bernhardt College, Balkhu. I was able to secure 3.88 GPA in my 12 board exam.",
        margin: "-440",
      },
      card2: {
        date: "2023 - Present",
        title: "Bachelors of Information Technology",
        description: "I am currently studying Bachelors of Information Technology (B.I.T) in KIST College, Kamalpokhari.",
        margin: "440",
      },
      card3: {
        date: "2023 - Present",
        title: "Web Development",
        description: "I have been learning how to develop websites and other stuffs related to web development since 2023. My current stack are forntend: JS with React and Next.js, backend with Node.js and Express and database with MySQL.",
        margin: "-440",
      },
      card4: {
        date: "2025 - Present",
        title: "Machine Learning",
        description: "I started learning Python on 2023 but dropped it to learn web development. After having a but of experience on web devlopemnt now I am shifting my focus toward machine learning through Python.",
        margin: "440",
      },
    }
  }


  return (
    <div className="main-container">
      <h3>
        MY RESUME
      </h3>
      <DataCardContainer data={data["data1"]} />
      <DataCardContainer data={data["data2"]} />
    </div>
  );
}