import { styled } from "styled-components";
import { Tabs, Tab } from "@mui/material";

export const StyledTabs = styled(Tabs)`
  background-color: #f0f0f0;
  border-radius: 8px;

  .MuiTabs-indicator {
    background-color: #007bff;
    height: 4px;
  }
`;

export const StyledTab = styled(Tab)`
  &.Mui-selected {
    color: #007bff;
    font-weight: bold;
  }

  &.MuiTab-root {
    text-transform: none;
    font-size: 16px;
  }
`;

