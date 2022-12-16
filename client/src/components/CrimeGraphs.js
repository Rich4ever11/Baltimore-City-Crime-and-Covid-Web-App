import { Bar, Line, Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

export default function BarGraph() {
  const [crimeData, setCrimeData] = useState([]);

  useEffect(() => {
    fetch("crime")
      .then((res) => res.json())
      .then((crimeData) => {
        setCrimeData(crimeData);
      });
  }, []);

  function returnCrimeTypeState() {
    var descriptionInfo = {};
    if (crimeData.crimeList) {
      crimeData.crimeList.map((crime) => {
        var description = crime.Description;
        if (description !== null) {
          if (!(description in descriptionInfo)) {
            descriptionInfo[description] = 0;
          } else if (description in descriptionInfo) {
            descriptionInfo[description] += 1;
          }
        }
      });
    }
    const descriptionKeys = Object.keys(descriptionInfo);
    const descriptionValues = Object.values(descriptionInfo);
    const state = {
      labels: descriptionKeys,
      datasets: [
        {
          label: "Crime Type Graph",
          backgroundColor: "blue",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: descriptionValues,
        },
      ],
    };
    return state;
  }

  function returnWeaponCrimeState() {
    var weaponInfo = {};
    if (crimeData.crimeList) {
      crimeData.crimeList.map((crime) => {
        var weapon = crime.Weapon;
        if (weapon !== null) {
          if (!(weapon in weaponInfo)) {
            weaponInfo[weapon] = 0;
          } else if (weapon in weaponInfo) {
            weaponInfo[weapon] += 1;
          }
        }
      });
    }
    const weaponKeys = Object.keys(weaponInfo);
    const weaponValues = Object.values(weaponInfo);
    const state = {
      labels: weaponKeys,
      datasets: [
        {
          label: "Weapon Graph",
          backgroundColor: "red",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: weaponValues,
        },
      ],
    };
    return state;
  }

  function returnCrimeMonthData() {
    var monthInfo = {};
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (crimeData.crimeList) {
      crimeData.crimeList.map((crime) => {
        var date = crime.CrimeDateTime;
        if (date === null) {
          return {};
        }
        const dateArray = date.split("-");
        var month = dateArray[1];
        if (month[0] === "0") {
          month = parseInt(month, 10);
        } else {
          month = parseInt(month);
        }
        if (date !== null) {
          if (!(monthNames[month - 1] in monthInfo)) {
            monthInfo[monthNames[month - 1]] = 0;
          } else if (monthNames[month - 1] in monthInfo) {
            monthInfo[monthNames[month - 1]] += 1;
          }
        }
      });
    }
    const monthKeys = Object.keys(monthInfo);
    const monthValues = Object.values(monthInfo);
    const state = {
      labels: monthKeys,
      datasets: [
        {
          label: "Crime Month Graph",
          backgroundColor: "yellow",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: monthValues,
        },
      ],
    };
    return state;
  }

  function returnCrimeNeighborhoodData() {
    var neighborhoodInfo = {};
    if (crimeData.crimeList) {
      crimeData.crimeList.map((crime) => {
        var neighborhood = crime.Neighborhood;
        if (neighborhood === null) {
          return {};
        }
        if (neighborhood !== null) {
          if (!(neighborhood in neighborhoodInfo)) {
            neighborhoodInfo[neighborhood] = 0;
          } else if (neighborhood in neighborhoodInfo) {
            neighborhoodInfo[neighborhood] += 1;
          }
        }
      });
    }
    const neighborhoodKeys = Object.keys(neighborhoodInfo);
    const neighborhoodValues = Object.values(neighborhoodInfo);
    const state = {
      labels: neighborhoodKeys,
      datasets: [
        {
          label: "Crime Neighborhood Graph",
          backgroundColor: "orange",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: neighborhoodValues,
        },
      ],
    };
    return state;
  }

  function returnCrimeTimeData() {
    var TimeInfo = {};
    if (crimeData.crimeList) {
      crimeData.crimeList.map((crime) => {
        var date = crime.CrimeDateTime;
        if (date === null) {
          return {};
        }
        var dateArray = date.split("T");
        var time = dateArray[1].slice(0, 2) + ":00:00";
        if (time !== null) {
          if (!(time in TimeInfo)) {
            TimeInfo[time] = 0;
          } else if (time in TimeInfo) {
            TimeInfo[time] += 1;
          }
        }
      });
    }
    //Sorts the time information
    const orderedTimeInfo = Object.keys(TimeInfo)
      .sort()
      .reduce((obj, key) => {
        obj[key] = TimeInfo[key];
        return obj;
      }, {});
    const timeKeys = Object.keys(orderedTimeInfo);
    const timeValues = Object.values(orderedTimeInfo);
    const state = {
      labels: timeKeys,
      datasets: [
        {
          label: "Crime Time of Day Graph",
          backgroundColor: "purple",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: timeValues,
        },
      ],
    };
    return state;
  }

  return (
    <Container maxWidth="lg" align="center">
      <Grid align="center" container>
        <Grid align="center">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Baltimore City Crime Visualizes
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Displayed underneath is a visualization of the graphs, charts, etc.
            corresponding with Baltimore's crime data. You will see how this
            data is shaped along with insightful information on a visual level.
          </Typography>
          <Divider />

          <Grid align="center" sx={{ m: 5 }}>
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Baltimore City Weapon Type Graphs
            </Typography>
            <Divider />
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs>
              <Bar
                data={returnWeaponCrimeState()}
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
                }}
              />
            </Grid>
            <Grid item xs>
              <Pie
                data={returnWeaponCrimeState()}
                options={{
                  title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid align="center" sx={{ m: 5 }}>
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Baltimore City Crime Type Graphs
            </Typography>
            <Divider />
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs>
              <Bar
                data={returnCrimeTypeState()}
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
                }}
              />
            </Grid>
            <Grid item xs>
              <Pie
                data={returnCrimeTypeState()}
                options={{
                  title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid align="center" sx={{ m: 5 }}>
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Baltimore City Crime Month Graphs
            </Typography>
            <Divider />
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs>
              <Line
                data={returnCrimeMonthData()}
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
                }}
              />
            </Grid>
            <Grid item xs>
              <Pie
                data={returnCrimeMonthData()}
                options={{
                  title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid align="center" sx={{ m: 5 }}>
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Baltimore City Crime Neighborhood Graphs
            </Typography>
            <Divider />
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs>
              <Bar
                data={returnCrimeNeighborhoodData()}
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
                }}
              />
            </Grid>
            <Grid item xs>
              <Pie
                data={returnCrimeNeighborhoodData()}
                options={{
                  title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid align="center" sx={{ m: 5 }}>
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Baltimore City Crime Time Graphs
            </Typography>
            <Divider />
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs>
              <Bar
                data={returnCrimeTimeData()}
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
                }}
              />
            </Grid>
            <Grid item xs>
              <Line
                data={returnCrimeTimeData()}
                options={{
                  title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid align="center" sx={{ m: 2 }}>
            <div style={{ textAlign: "center" }}>
              <Link to="/crime">
                <Typography
                  component="h3"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Return To Crime Map
                </Typography>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
