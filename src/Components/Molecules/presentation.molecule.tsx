import React from "react";
import { Grid } from "@mui/material";
import { Content } from "../Atoms/labels.atom";
import { Button } from "../Atoms/Buttons.atom";
import { useTypewriter } from "react-simple-typewriter";

interface Iprops {}

export default function MyPresentation(props: Iprops) {
  const [text] = useTypewriter({
    words: ["Fullstack", "Full Cycle"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 80,
    delaySpeed: 1200,
  });

  const handleContactClick = () => {
    window.location.href = "https://www.linkedin.com/in/fernandoofilho/";
  };

  return (
    <Grid container direction={"column"} justifyContent={"center"}>
      <Grid item>
        <Content className="Emphasis">I'm</Content>
        <Content className="ColoredEmphasis">Fernando Filho</Content>
        <Content className="MinorEmphasis">
          <span>{text}</span> Developer
        </Content>
      </Grid>
      <Grid item marginTop={4}>
        <Button onClick={handleContactClick}>
          Contact Me
        </Button>
      </Grid>
    </Grid>
  );
}
