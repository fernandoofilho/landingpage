import { Grid } from "@mui/material"
import Header from "../Organisms/header.organism"
import Presentation from "../Organisms/presentation.organism"
import Skills from "../Organisms/skills.organism"
import AboutText from "../Organisms/about.organism"


interface Iprops {

}

export default function About(props:Iprops) {
    return (
        <Grid>
            <Presentation/>
            <AboutText />
            <Skills/>
        </Grid>
    )
}