import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home";
import TheLittleChapel from "./components/TheLittleChapel";
import Gardenroom from "./components/Gardenroom";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={3} md={3} >
            <Nav />
          </Grid>
         
            <Routes>
              <Route index element={<Home />} />{" "}
              <Route path="/littlechapel" element={<TheLittleChapel />} />
              <Route path="gardenroom" element={<Gardenroom />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Grid>
      
        <Footer />
      </Container>
    </>
  );
}
