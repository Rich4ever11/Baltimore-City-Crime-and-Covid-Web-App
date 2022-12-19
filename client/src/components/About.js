import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <Grid align="center" container>
      <Grid align="center">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          About Us
        </Typography>
        <Divider />
        <Typography
          fontSize="1.2rem"
          align="center"
          color="text.secondary"
          paragraph
        >
          This application was developed and created by Team One in Software
          Engineering during the Fall of 2023, under the guide of professor
          Abhijit Dutt.
        </Typography>
        <Typography
          fontSize="1.2rem"
          align="center"
          color="text.secondary"
          paragraph
        >
          This project would not have been accomplished without the help of the
          covid dataset that came from{" "}
          <Link
            target="_blank"
            href="https://catalog.data.gov/dataset/md-covid-19-cases-by-zip-code"
            underline="none"
            rel="noreferrer"
          >
            Maryland Catalog Dataset
          </Link>
          {". "}
          and the crime dataset set coming from the link of{" "}
          <Link
            target="_blank"
            href="https://data.baltimorecity.gov/datasets/baltimore::part-1-crime-data-/explore?location=39.300270%2C-76.618650%2C13.00."
            rel="noreferrer"
            underline="none"
          >
            Baltimore City Crime Dataset
          </Link>
          {". "}
        </Typography>

        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="https://cdn.britannica.com/90/77990-050-E6087086/Inner-Harbor-skyline-Baltimore-Maryland.jpg"
        />

        <Grid align="center" sx={{ m: 2 }}>
          <div style={{ textAlign: "center" }}>
            <NavLink to="/">
              <Typography
                component="h3"
                variant="h4"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Return To Dashboard
              </Typography>
            </NavLink>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
