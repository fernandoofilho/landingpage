import About from "../Components/Templates/about.template";
import Contact from "../Components/Templates/contact.template";
import Portfolio from "../Components/Templates/portfolio.template";
import { Grid } from "@mui/material";
import { MainTheme } from "../Components/style";
export default function Home() {
  return (
    <Grid style={{
      width: "100%",
      height: "100%",
      background: MainTheme.bg
    }}>
      {/* <Contact /> */}
      {/* <Portfolio /> */}
      <About />
    </Grid>
  );
}
