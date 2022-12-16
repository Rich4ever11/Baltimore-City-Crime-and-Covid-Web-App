import { Bar, Line, Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

export default function CovidGraph() {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    fetch("covid")
      .then((res) => res.json())
      .then((covidData) => {
        setCovidData(covidData);
        console.log(covidData);
      });
  }, []);

  function returnCovidState() {
    var increaseInfo = {};
    if (covidData.covidList) {
      covidData.covidList.map((covid) => {
        var covidCount = covid.covidCount;
        var covidDate = covid.covidDate;
        increaseInfo[covidDate] = covidCount;
      });
    }
    const dateKeys = Object.keys(increaseInfo);
    const caseCountValues = Object.values(increaseInfo);
    const state = {
      labels: dateKeys,
      datasets: [
        {
          label: "Covid Time Graph",
          backgroundColor: "red",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: caseCountValues,
        },
      ],
    };
    return state;
  }

  return (
    <Container maxWidth="lg" align="center">
      <Grid align="center" container>
        <Grid sx={{ mt: 10 }} align="center">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Baltimore City Covid Visualizes
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Displayed underneath is a visualization of the graphs, charts, etc.
            corresponding with Baltimore's covid data. You will see how this
            data is shaped along with insightful information on a visual level.
          </Typography>
          <Divider />

          <Grid align="center" sx={{ m: 2 }}>
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Covid Cases Timeline
            </Typography>
            <Divider />
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs>
              <Line
                data={returnCovidState()}
                options={{
                  title: {
                    display: true,
                    text: "Average Weapon Used Per 100 Crimes",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                  elements: {
                    point: {
                      radius: 0,
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
