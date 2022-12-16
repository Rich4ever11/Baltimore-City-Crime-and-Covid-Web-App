import Container from "@mui/material/Container";
import React from "react";
import Grid from "@mui/material/Grid";
import { Map, TileLayer } from "react-leaflet";
import "leaflet.heat";

export default function BasicMap() {
  return (
    <Container style={{ marginTop: 80 }} maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Map center={[39.2904, -76.6122]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetuseMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
        </Grid>
      </Grid>
    </Container>
  );
}
