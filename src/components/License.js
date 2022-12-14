import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function License() {
  return (
    <Grid item xs container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h1">
          Marriage License
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography>
          <strong>To Apply for a Valid Georgia Marriage License:</strong>
        </Typography>
        <Typography>
          Actual application for the marriage license is made in person at the
          marriage license division of the county’s probate court at your local
          courthouse. Each applicant must bring two valid forms of
          identification. Both bride and groom must be 18 years old to apply
          without parental consent. You must fill out a brief form. The license
          is issued at the time of application, and there is no waiting period
          before the marriage can take place. Georgia residents may apply in any
          GA county. Non-GA residents must apply in the county where the
          marriage is to be performed.
        </Typography>
        <hr />
        <Typography>
          A marriage license in White Country, GA may be obtained Mon-Fri.
          8:00am-5:00pm from:
        </Typography>
        <Typography component="address" align="center">
          The Office of the Probate Court
          <br />
          South Main Street
          <br />
          Cleveland, GA 30528
          <br />
          <a href="tel:17068654141">1-706-865-4141</a>
        </Typography>
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
        <img src="./images/pic2.gif" alt="pic2" />
        <img src="./images/pic7.gif" alt="pic7" />
      </Grid>
    </Grid>
  );
}
