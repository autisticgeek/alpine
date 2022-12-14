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
      <Grid item xs={12}>
        <Typography variant="h3" component="h1">
          The Garden Room
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography>
          Whether a romantic ceremony, beautiful reception, or the perfect
          backdrop for special photographs, the Garden Room provides it all.
          With windows on three sides, this lovely room and provides a view of
          the mountains, rich forests, and Bavarian Village. Seven lighted
          ceiling fans add subtle lighting to the lush ambiance. A nine foot
          wide hunter green carpet runner leads from the main hallway to a
          gorgeous white indoor gazebo decorated with blush pink rose garlands
          and ivy. Silk bridal bouquets, and boutonnieres are available for use
          during your ceremony.
        </Typography>
        <Typography variant="h4" component="h2">
          About the garden room
        </Typography>
        <List>
          {[
            "Views mountains, forests and the Festhalle",
            "Seats 25",
            "Windows on three sides",
            "7 Lighted ceiling fans",
            "Indoor gazebo with blush pink rose garlands",
            "Spotlighted reception area",
            "Hunter green carpet",
            "MP3 sound system",
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
        <img src="./images/gardenrm3.jpg" alt="pic1" />
        <img src="./images/gardenrm2.jpg" alt="gardenrm2" />
        <img src="./images/gardenrm4.jpg" alt="gardenrm4" />
      </Grid>
    </Grid>
  );
}
