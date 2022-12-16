import Container from "@mui/material/Container";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import Grid from "@mui/material/Grid";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Typography from "@mui/material/Typography";
import "leaflet.heat";

export default function MapDisplay(props) {
  const [dataPoints, setDataPoints] = useState([]);
  const [crimeInfo, setCrimeInfo] = useState([]);

  function toggleHeatMap() {
    if (dataPoints.length === 0 && props.crimeInfo) {
      var heatMapPoints = [];
      props.crimeInfo.crimeList.map((crime) => {
        let data = {
          coordinates: [crime.Longitude, crime.Latitude],
        };
        heatMapPoints.push(data);
      });
      setDataPoints(heatMapPoints);
    } else {
      setDataPoints([]);
    }
  }

  function toggleCrimeInfo() {
    if (crimeInfo.length === 0 && props.crimeInfo.crimeList) {
      setCrimeInfo(props.crimeInfo.crimeList);
    } else {
      setCrimeInfo([]);
    }
  }

  return (
    <Container style={{ marginTop: 80 }} maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid align="center" item xs={12} md={8} lg={9}>
          <Map center={[39.2904, -76.6122]} zoom={13} scrollWheelZoom={false}>
            <HeatmapLayer
              points={dataPoints}
              longitudeExtractor={(m) => m.coordinates[0]}
              latitudeExtractor={(m) => m.coordinates[1]}
              intensityExtractor={(m) => 100}
            />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetuseMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {crimeInfo.map((crime) =>
              crime.Latitude != null && crime.Longitude != null ? (
                <Marker
                  key={crime.RowID}
                  position={[crime.Latitude, crime.Longitude]}
                >
                  <Popup>
                    Crime Description: {crime.Description} <br />
                    Location: {crime.Location} <br />
                    Time: {crime.CrimeDateTime} <br />
                    Weapon: {crime.Weapon} <br />
                    Race: {crime.Race} <br />
                    Gender: {crime.Gender} <br />
                    Age: {crime.Age} <br />
                  </Popup>
                </Marker>
              ) : (
                <p></p>
              ),
            )}
          </Map>
        </Grid>
      </Grid>
      <div style={{ paddingTop: " 1.0em", textAlign: "center" }}>
        <Button onClick={toggleHeatMap} variant="outlined">
          Toggle Heat Map
        </Button>
        <Button onClick={toggleCrimeInfo} variant="outlined">
          Toggle Data Points
        </Button>
        <Button variant="outlined" href="/crime-graphs">
          Display Crime Graphs
        </Button>
      </div>
    </Container>
  );
}
