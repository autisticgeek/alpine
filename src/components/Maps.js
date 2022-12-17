import {
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

export default function Maps() {
  return (
    <Grid item xs container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h1">
          Maps and Directions
        </Typography>
      </Grid>

      <Grid item className="sidePictures">
        <Typography>
          Click on the thumbnail of the map below to have a full sized map open
          in a new window
        </Typography>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid
            item
            xs={3}
            component="figure"
            container
            alignItems="center"
            sx={{ flexDirection: "column" }}
          >
            <Typography component="figcaption">Driving Directions</Typography>
            <Link
              href="./images/cvbmap.gif"
              sx={{ border: 2, borderColor: "#008000" }}
            >
              <img
                src="./images/cvbmap_small.gif"
                alt="Driving Directions"
                style={{ height: "111px" }}
              />
            </Link>
          </Grid>
          <Grid
            item
            xs={3}
            component="figure"
            container
            alignItems="center"
            sx={{ flexDirection: "column" }}
          >
            <Typography component="figcaption">City of Helen</Typography>
            <Link
              href="./images/helenmap.gif"
              sx={{ border: 2, borderColor: "#008000" }}
            >
              <img
                src="./images/helenmap_small.gif"
                alt="City of Helen"
                style={{ height: "111px" }}
              />
            </Link>
          </Grid>
        </Grid>
        <hr />

        <Grid item>
          <Typography component="h2" variant="h4" align="center">
            directions to the chapel
          </Typography>
          <Typography>
            Turn off Main Street (GA 75 North) onto Munich Strasse at Wendy's.
            On the right, turn into the driveway under the brown arbor next to
            the chapel.
          </Typography>
        </Grid>
        <Grid item container justifyContent="space-around">
          <Grid item>
            <Link
              href="https://maps.apple.com/?address=91%20Munich%20St,%20Helen,%20GA%20%2030545,%20United%20States&auid=577628436369278376&ll=34.701923,-83.727771&lsp=9902&q=Alpine%20Wedding%20Chapel"
              rel="noreferrer"
              target="_blank"
            >
              Apple Maps 
            </Link>
          </Grid>

          <Grid item>
            <Link
              href="https://maps.app.goo.gl/djxTdnAH8TkcFwcR8?g_st=ic"
              rel="noreferrer"
              target="_blank"
            >
              Google Maps
            </Link>
          </Grid>
        </Grid>
        <Grid item>
          <Typography component="h2" variant="h4" align="center">
            Parking
          </Typography>
          <Typography>
            Parking is provided for the bride, groom, and guests{" "}
            <u>for their wedding time ONLY.</u> Space is limited to ONLY one
            wedding party at a time. Please don't arrive prior to the arrival
            time. And, don't leave your vehicles in our lot after your wedding
            leave time.{" "}
            <u>
              Vehicles left in our lot will be towed at the vehicle owner's
              expense to make way for the next wedding.
            </u>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
