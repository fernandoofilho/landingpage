import { Grid } from "@mui/material";
import MyPresentation from "../Molecules/presentation.molecule";
import PhotoPresentation from "../Molecules/photoPresentation.molecule";

interface Iprops {}

export default function Presentation(props: Iprops) {
  return (
    <Grid
      container
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item xs={4}>
        <MyPresentation />
      </Grid>
      <Grid item marginLeft={10}>
        <PhotoPresentation />
      </Grid>
    </Grid>
  );
}
