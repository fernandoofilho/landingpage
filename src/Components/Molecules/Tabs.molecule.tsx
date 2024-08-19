import { StyledTabs, StyledTab } from "../Atoms/tabs.atom";
import { Grid } from "@mui/material";

interface ITab {
  key: string;
  label: string;
}

interface Iprops {
  Tabs: ITab[];
}

export default function Tabs(props: Iprops) {
  // TODO: Fazer functionar isso 
  return (
    <Grid item>
      <StyledTabs >
        {props.Tabs.map((tab) => (
          <StyledTab key={tab.key} label={tab.label} />
        ))}
      </StyledTabs>
    </Grid>
  );
}
