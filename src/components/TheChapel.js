import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export default function TheChapel() {
  return (
    <Grid item xs container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h1">
          The Chapel
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography>
          <span className="firstLetter">O</span>ur beautiful cedar Chapel
          provides yet another option for your special ceremony. Directly across
          the street from our office, the Chapel features a 22 foot cathedral
          ceiling, crystal chandeliers and matching crystal wall sconces and
          seats up to 40 guests. Lush silk foliage includes ferns, climbing ivy,
          magnolias, and ficus trees, and a lovely white latticed arch. Silk
          bridal bouquets and boutonnieres are available for use during the
          ceremony.
        </Typography>
        <Typography variant="h4" component="h2">
          About the chapel
        </Typography>
        <List>
          {[
            "22-foot cathedral ceiling",
            "Seats 40",
            "Crystal chandeliers & sconces",
            `21 lighted 15" candles`,
            "Ferns, ivy, magnolias, ficus trees",
            "White latticed arch",
            "MP3 sound system",
            "Dressing rooms",
            "Dressing rooms",
            "Guest registry stand",
            "Unity candle stand",
            "Photo CD & DVD included",
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
        <img src="./images/newchap4.jpg" alt="newchap4" />
        <img src="./images/newchap7.jpg" alt="newchap7" />
        <img src="./images/pic7.gif" alt="pic7" />
      </Grid>
    </Grid>
  );
}
