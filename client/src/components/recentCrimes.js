import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import crimeData from "../data/crimeData.json";

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <h1>Recent Crimes</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time Crime Detected</TableCell>
            <TableCell>Type of Crime</TableCell>
            <TableCell>Crime Weapon</TableCell>
            <TableCell>Race of Suspect</TableCell>
            <TableCell>Age of Suspect</TableCell>
            <TableCell>Gender of Suspect</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {crimeData.features.slice(0, 100).map((crime) => (
            <TableRow key={crime.properties.RowID}>
              <TableCell>{crime.properties.CrimeDateTime}</TableCell>
              <TableCell>{crime.properties.Description}</TableCell>
              <TableCell>{crime.properties.Weapon}</TableCell>
              <TableCell>{crime.properties.Race}</TableCell>
              <TableCell>{crime.properties.Age}</TableCell>
              <TableCell>{crime.properties.Gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more crimes
      </Link>
    </React.Fragment>
  );
}
