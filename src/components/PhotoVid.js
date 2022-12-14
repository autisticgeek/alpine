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

export default function PhotoViD() {
  return (
    <Grid item xs container spacing={2}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Photography &amp; Videography
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{ display: { xs: "block", md: "none" } }}
          align="center"
        >
          Photography &amp; Videography
        </Typography>
      </Grid>

      <Grid item className="sidePictures">
        <Typography variant="h6" component="h2">
          Photo CD (Free)
        </Typography>
        <Typography>
          Using state-of-the-art equipment, digital photos will be taken of all
          wedding activities. In Packages #0 - 6, one photo CD is provided to
          the bride and groom on the day of the wedding at no charge. Please
          safeguard your CD as no photo card or copy of the CD is retained at
          the Chapel.
        </Typography>
        <Typography variant="h6" component="h2">
          DVD (Free Movie)
        </Typography>
        <Typography>
          In Packages #0 - 6, one DVD of all indoor wedding activities is
          provided to the bride and groom on the day of the wedding at no extra
          charge.Please safeguard your DVD as no photo card or copy of your DVD
          is retained at the Chapel.
        </Typography>
        <Typography variant="h6" component="h2">
          No Camera Policy
        </Typography>
        <Typography>
          Guests are only allowed to do photos OUTSIDE. No cameras (still,
          digital, camera phone, or video) are allowed to be used at any time
          INSIDE ANY BUILDING of the Alpine Wedding Chapel.
        </Typography>
        <Typography align="center" component="blockquote" sx={{mt:4}}>"COME, DRESS, & WE'LL DO THE REST!"</Typography>
        <hr />
      </Grid>
    </Grid>
  );
}
