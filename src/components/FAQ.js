import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

export default function FAQ() {
  return (
    <Grid item xs container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h1">
          Frequently Asked Questions
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          <strong>
            Please review the following questions and answers before you arrive
            for your wedding.
          </strong>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>What time should we arrive?</strong>
        </Typography>
        <Typography>
          One hour is allowed for a single ceremony. Two hours are allowed for a
          ceremony with reception. If your reserved time is 2:00 &mdash; 3:00,
          you should arrive at 2:00 and be out before 3:00 for the next
          ceremony. If you arrive dressed, we will begin on the hour. If you
          need to change, we will begin when you are dressed. Brides generally
          arrive with their hair, makeup, and nails done; slipping into their
          wedding attire should not take more than 15 minutes.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>Where do we park?</strong>
        </Typography>
        <Typography>
          Parking is available next to the chapel. Turn off Main Street (GA75)
          onto Munich at Wendy's. Turn into the driveway under the arbor next to
          the chapel. Space is limited to only one wedding party at a time.
          Vehicles left after the leave time will be towed.
        </Typography>
        <Typography>
          Parking is available next to the chapel. Turn off Main Street (GA75)
          onto Munich at Wendy's. Turn into the driveway under the arbor next to
          the chapel. Space is limited to only one wedding party at a time.
          Vehicles left after the leave time will be towed.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>Do we have a rehearsal?</strong>
        </Typography>
        <Typography>
          No, but directions and adequate prompts are given prior to the
          ceremony.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>Can we bring cameras?</strong>
        </Typography>
        <Typography>
          No cameras (still, digital, camera phones or video) are allowed to be
          used at any time inside any building of the Alpine Wedding Chapel.
          Outdoor photography may be done after your wedding during your
          reserved wedding time.
        </Typography>
      </Grid>

      <Grid item>
        <Typography>
          <strong>Do attendants, children, and babies count as guests?</strong>
        </Typography>
        <Typography>
          Other than the bride and the groom, all men, women, infants, and other
          children count as guests.
        </Typography>
      </Grid>

      <Grid item>
        <Typography>
          <strong>
            If I arrange a carriage, what time shall I tell the carriage to pick
            us up after the ceremony?
          </strong>
        </Typography>
        <Typography>
          15 minutes before the end of your scheduled time to ensure that we are
          able to take pictures of your leaving on a carriage.
        </Typography>
      </Grid>

      <Grid item>
        <Typography>
          <strong>Where do attendants dress before the ceremony?</strong>
        </Typography>
        <Typography>
          Attendants and all other guests should arrive dressed for the
          ceremony. Small dressing rooms are provided for only the bride and
          groom.
        </Typography>
      </Grid>

      <Grid item>
        <Typography>
          <strong>Who can give the bride away?</strong>
        </Typography>
        <Typography>
          The bride’s father or other adult representative of the bride’s
          father. "No one can escort the bride in The Little Chapel". It is
          inappropriate for children to give their mother away; however,
          occasionally, an older child escorts his mother down the aisle.
        </Typography>
      </Grid>

      <Grid item>
        <Typography>
          <strong>Can we have a champagne toast?</strong>
        </Typography>
        <Typography>
          No, we do not have a liquor license and there is a brown bag ordinance
          in Helen that prevents any spirits from being served or consumed on
          our premises.
        </Typography>
      </Grid>

      <Grid item>
        <Typography>
          <strong>Can we have attendants?</strong>
        </Typography>
        <Typography>
          Witnesses are no longer required in Georgia. But, if you wish, the
          following attendants are allowed:
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">Package #</TableCell>
                <TableCell align="center"># Attendants Allowed</TableCell>
                <TableCell align="center"># Guest Allowed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { package: 0, attendants: 0, guests: 0 },
                { package: 1, attendants: 0, guests: "1-6" },
                { package: 2, attendants: "0-5", guests: "7-12" },
                { package: 3, attendants: "0-5", guests: "0-25" },
                { package: 4, attendants: "0-7", guests: "0-40" },
                { package: 5, attendants: "0-5", guests: "0-25" },
                { package: 6, attendants: "0-7", guests: "0-40" },
              ].map((row) => (
                <TableRow>
                  <TableCell align="center">{row.package}</TableCell>
                  <TableCell align="center">{row.attendants}</TableCell>
                  <TableCell align="center">{row.guests}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography>
          If you chose to have more attendants than the number of attendants
          allowed, $50 per attendant will be charged for each attendant over the
          number of attendants allowed. Attendants DO NOT count as guests.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>Do you have a place for the guest book?</strong>
        </Typography>
        <Typography>
          A bride may bring a guest book if she wishes. The desk in the foyer of
          the office building may be used if the ceremony is in the Little
          Chapel or Garden Room. A brass guest registry stand is provided in the
          Chapel.
        </Typography>
      </Grid>

      <Grid item>
        <Typography>
          <strong>Do you box up leftover food from the reception?</strong>
        </Typography>
        <Typography>
          Food is always plentiful. Only leftover cake, if any, is boxed up for
          the bride & groom. As with any other buffet, all other food remains
          the property of the person who prepared it and is not boxed up as a
          "doggie bag"
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>Do we need to provide ushers and servers?</strong>
        </Typography>
        <Typography>
          No, no ushers or servers are required.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>Can we bring our own minister?</strong>
        </Typography>
        <Typography>
          No, we do not allow visiting ministers to be in charge of the
          ceremony. However, if he or she wishes to offer a prayer, this would
          be welcomed.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>
            Can we keep the flowers (bouquets & boutonnieres) that you provide?
          </strong>
        </Typography>
        <Typography>
          No, we have flowers for bride & groom to use here only.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>Can my flower girl use real flower petals?</strong>
        </Typography>
        <Typography>
          No, they may stain the carpet; silk petals are required.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>Can the florist deliver my fresh flowers?</strong>
        </Typography>
        <Typography>
          No, we are only open by appointment and may not be open to receive
          them. Further, we have no space to store such items.
        </Typography>
      </Grid>

      <Grid item>
        <Typography>
          <strong>Can I provide my own decorations?</strong>
        </Typography>
        <Typography>
          No, time is not allowed for exchanging decorations.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>
            If I bring non-food items (cake topper, toasting glasses, napkins,
            etc.) for the reception, when do I bring them?
          </strong>
        </Typography>
        <Typography>
          We provide these items, but if you want to use your own, bring them at
          the time of the wedding and have them opened and ready for immediate
          use.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>Can I choose my own music?</strong>
        </Typography>
        <Typography>
          No, we now use an MP3 sound system and cannot customize selections.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>
            How long can we wait on guests or wedding party members who are
            late?
          </strong>
        </Typography>
        <Typography>Not more than 15 minutes.</Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>What special provisions are made for small children?</strong>
        </Typography>
        <Typography>
          The Chapel is not designed for children. If, however, a child attends,
          he or she should be very carefully supervised & disciplined by a
          responsible adult assigned to him/her to ensure the reverence &
          dignity of the occasion.. ALL persons are expected to behave
          respectfully and maturely while attending weddings & receptions at the
          chapel.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>What is the ceremony like?</strong>
        </Typography>
        <Typography>
          We perform only non-denominational, Christian ceremonies. This
          covenant ceremony ensures the dignity and spirituality of the event.
          See a copy of this ceremony on our website. Please do not ask us to
          omit references to God, Jesus, death, eternity, forever, etc..
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <strong>Can I wear a train dress?</strong>
        </Typography>
        <Typography>
          The Garden Room and Chapel are excellent for train dresses, but the
          Little Chapel is a little small for them. A train somewhat overwhelms
          the Little Chapel.
        </Typography>
      </Grid>

      <Grid item>
        <hr />
      </Grid>
    </Grid>
  );
}
