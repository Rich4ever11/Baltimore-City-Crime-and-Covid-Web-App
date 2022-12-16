import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import DefaultDashboard from "./components/DefaultDashboard";
import CrimeDashboard from "./components/CrimeDashboard";
import CovidDashboard from "./components/CovidDashboard";
import CrimeGraphs from "./components/CrimeGraphs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultDashboard />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/crime" element={<CrimeDashboard />}></Route>
        <Route path="/covid" element={<CovidDashboard />}></Route>
        <Route path="/crime-graphs" element={<CrimeGraphs />}></Route>
      </Routes>

      <Divider />

      <Box sx={{ bgcolor: "background.paper", p: 1 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Baltimore City Covid & Crime Map
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Created for Maryland residents and the Baltimore City Metropolitan
          area.{" "}
        </Typography>
        <div className="footer-copywrite"> Copyright © Map Project 2022.</div>
      </Box>
    </div>
  );
}

export default App;
