import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function TheLittleChapel() {
  return (
    <Grid item xs container spacing={2}>
      <Grid item xs>
        <Typography variant="h3" component="h1">
          The Little Chapel
        </Typography>
        <Typography>
          Intimate and romantic, the little Chapel seats up to 12 guests in 6
          small pews. Side sconces and tray lighting add a soft ambience to the
          rich wooden interiors and cathedral ceiling. Lush hunter green
          carpeting adorns the entire chapel floor. The aisle leads to a white
          latticed arch decorated with magnificent silk magnolias and ivy
          garlands. A variety of lush silk ferns provides a lovely backdrop for
          the brass candelabra and elegant white candles. Located in the office
          building, the Little Chapel is the favorite choice of couples with no
          guests or a small number of guests. Silk bridal bouquets and
          boutonnieres are available for use during the ceremony.
        </Typography>
        <Typography variant="h4" component="h2">
          About the little chapel
        </Typography>
        <List>
          {[
            "Romantic, intimate",
            "Seats up to 12 guests",
            "Side sconce lighting",
            "Soft tray lighting",
            "Wooded interiors",
            "Hunter green carpet",
            "White lattice arch",
            "Ferns, ivy, magnolias",
            "Brass candelabra",
            "14 lighted 12-inch candles",
            "MP3 sound system",
            "Photo CD included",
            "DVD included",
          ].map((li) => (
            <ListItem disablePadding>
              <ListItemText primary={li} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid
        className="sidePictures"
        item
        component={Box}
        md={3}
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
        }}
      >
        <img src="./images/pic1.gif" alt="pic1" />
        <img src="./images/hjk.gif" alt="hjk" />
        <img src="./images/littlechap3.gif" alt="littlechap3" />
      </Grid>
    </Grid>
  );
}
