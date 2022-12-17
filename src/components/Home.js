import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Grid item xs container spacing={2}>
      <Grid item xs>
        <Typography variant="h3" component="h1">
          <img
            src="./images/logo.png"
            alt="Alpine Wedding Chapel"
            style={{ width: "100%" }}
          />
        </Typography>
        <Typography textAlign="justify">
          Nestled in the scenic mountains of Northeast Georgia Lies the small
          alpine village of Helen. In the heart of this picturesque and romantic
          setting is the Alpine Wedding Chapel making dreams come true every day
          for people in love.
        </Typography>
        <hr />
        <List>
          {[
            "Candlelit Ceremonies",
            "Floral Decorations",
            "Indoor Gazebo",
            "Photo CD",
            "DVD",
            "Silk Bouquets",
            "Dressing Rooms",
            "Brass Candelabra",
            "Unity Candles",
            "Receptions",
            "Renewal of Vows",
            "Non-denominational",
            "Christian Ceremonies",
            "MP3 Traditional Wedding Music",
          ].map((li) => (
            <ListItem disablePadding>
              <ListItemText>
                <span className="firstLetter">{li[0]}</span>
                {li.slice(1, li.length)}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid
        className="sidePictures"
        item
        component={Box}
        md={5}
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
        }}
      >
        <img src="./images/recpgen1.jpg" alt="recpgen1" />
        <img src="./images/pic2.gif" alt="pic2" />
        <img src="./images/gardenrm6.jpg" alt="gardenrm6" />
      </Grid>
    </Grid>
  );
}
