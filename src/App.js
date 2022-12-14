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
import TheChapel from "./components/TheChapel";
import Packages from "./components/Packages";
import ReceptionMenu from "./components/ReceptionMenu";
import PhotoViD from "./components/PhotoVid";
import Vows from "./components/Vows";
import FAQ from "./components/FAQ";
import License from "./components/License";
import Maps from "./components/Maps";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={3} md={3}>
            <Nav />
          </Grid>

          <Routes>
            <Route index element={<Home />} />{" "}
            <Route path="littlechapel" element={<TheLittleChapel />} />
            <Route path="gardenroom" element={<Gardenroom />} />
            <Route path="chapel" element={<TheChapel />} />
            <Route path="weddingpackages" element={<Packages />} />
            <Route path="reception_menu" element={<ReceptionMenu />} />
            <Route path="wedding_ceremony" element={<Vows />} />
            <Route path="photography__videography" element={<PhotoViD />} />
            <Route path="faqs" element={<FAQ />} />
            <Route path="marriagelicense" element={<License />} />
            <Route path="area_maps" element={<Maps />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Grid>

        <Footer />
      </Container>
    </>
  );
}
