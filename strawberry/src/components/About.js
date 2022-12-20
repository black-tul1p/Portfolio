import { Button } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <div className="About-page">
      <h1 className="Title">About me</h1>
      <>
        <p className="Info-text">
          Senior in the Computer Science program at Purdue University with a
          minor in Mathematics.
        </p>
        <p className="Info-text">
          Undergraduate Researcher with Merck & Co., Teaching Assistant for the
          Purdue University Department of Computer Science.
        </p>
        <p className="Info-text">
          I interned this summer as an AI/ML Data Engineer for Slalom. I have
          also recently worked as a Web Applications Developer for A2E
          Solutions. I have previously worked at the Department of Economy &
          Tourism, Dubai as an Applications Development Intern during Summer
          2021.
        </p>
      </>
      <>
        <div className="Contact-buttons">
          <Button
            variant="outlined"
            sx={{
              color: "lightgreen",
              borderColor: "lightgreen",
              margin: "1em",
            }}
            href="home"
            target="_blank"
          >
            Let's Talk
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "plum", borderColor: "plum", margin: "1em" }}
            href="home"
            target="_blank"
          >
            My Resume
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "tomato", borderColor: "tomato", margin: "1em" }}
            href="https://www.linkedin.com/in/divay-gupta/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            sx={{ color: "skyblue", borderColor: "skyblue", margin: "1em" }}
            href="https://www.github.com/black-tul1p"
            target="_blank"
          >
            GitHub
          </Button>
        </div>
      </>

      {/* <div className="Color-overlay" /> */}
    </div>
  );
}
