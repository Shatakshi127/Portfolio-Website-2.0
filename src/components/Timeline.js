import React from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [
    {
      cardTitle: "HyperEdge",
      cardSubtitle: " Mentee at Winter of Blockchain",
      cardDetailedText:
        "Part of a team of mentees who are dedicated to the advancement of the blockchain and open-source community.",
    },
    {
      cardTitle: "ISTE",
      cardSubtitle: "Core Member",
      cardDetailedText:
        "Part of a team of students who are dedicated to the advancement of the technology and open-source community.",
    },
    {
      cardTitle: "Oasis InfoByte",
      cardSubtitle: "Web Dev Intern",
      cardDetailedText:
        "Completed the Web Dev Internship program and learned a lot.",
    },
    {
      cardTitle: "Oasis InfoByte",
      cardSubtitle: "Data Science Intern",
      cardDetailedText:
        "Completed the Data Science Internship program and learned a lot.",
    },
    {
      cardTitle: "UNIcompiler",
      cardSubtitle: "Web Dev Intern",
      cardDetailedText:
        "Completed the Web Dev Internship program and learned a lot.",
    },
    {
      cardTitle: "UNIcompiler",
      cardSubtitle: "Python Engineer Intern",
      cardDetailedText:
        "Completed the Python Engineer Internship program and learned a lot.",
    },
    {
      cardTitle: "IIITH",
      cardSubtitle: "Attendant of Summer School of AI",
      cardDetailedText:
        "Was selected in Summer School of AI and learnt a lot about the world of AI, ML and DL.",
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chrono
        useReadMore={true}
        items={items}
        slideShow
        hideControls={true}
        mode="VERTICAL_ALTERNATING"
        cardWidth={300}
        theme={{
          titleColor: "#6666ff",
          primary: "#6666ff",
          secondary: "#6666ff",
          cardBgColor: "#ffffff",
        }}
      >
        {/* <div className="chrono-icons">
          <img src={MlscSheild} alt="Mlsc Sheild" />
          <Trophy size={32} color="#000" weight="fill" />
        </div> */}
      </Chrono>
    </div>
  );
};

export default Timeline;
