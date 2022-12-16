import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import InfoIcon from "@mui/icons-material/Info";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Default Map" />
    </ListItemButton>
    <ListItemButton to="/crime">
      <ListItemIcon>
        <SportsKabaddiIcon />
      </ListItemIcon>
      <ListItemText primary="Crime Map" />
    </ListItemButton>
    <ListItemButton to="/covid">
      <ListItemIcon>
        <CoronavirusIcon />
      </ListItemIcon>
      <ListItemText primary="Covid Visualization" />
    </ListItemButton>
    <ListItemButton to="/about">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About Page" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Toggle Time Period
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Entire Year" />
    </ListItemButton>
  </React.Fragment>
);
