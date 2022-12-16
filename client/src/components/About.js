import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        About Page
      </Typography>
      <div style={{ textAlign: "center" }}>
        <div>
          <p>
            “Md Covid-19 - Cases by ZIP Code.” Catalog, Publisher
            Opendata.maryland.gov, 25 Nov. 2022,
            https://catalog.data.gov/dataset/md-covid-19-cases-by-zip-code.
          </p>
        </div>
        <div>
          <p>
            “Part 1 Crime Data.” Open Baltimore,
            https://data.baltimorecity.gov/datasets/baltimore::part-1-crime-data-/explore?location=39.300270%2C-76.618650%2C13.00.{" "}
          </p>
        </div>

        <Link to="/">Return To Dashboard</Link>
      </div>
    </div>
  );
}
