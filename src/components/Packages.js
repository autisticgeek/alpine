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

export default function Packages() {
  return (
    <Grid item xs container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h1">
          Wedding Packages
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="h4" component="h2">
          Package #0:
        </Typography>
        <Typography>
          <strong>
            Little Chapel or Garden Room Wedding with 0 Guests and No Attendants
            $295.00
          </strong>
        </Typography>
        <List>
          {[
            "Little chapel wedding ceremony for 0 guests and 0 Attendants",
            "Use of Little chapel dressing rooms for 1 hour with ordained minister with non-denominational Christian ceremony",
            "Lighted candles in brass candelabra & unity candle service",
            "MP3 Traditional  wedding music in fully decorated Little Chapel",
            "Use of bouquet & boutonnieres (or bring your own flowers)",
            "CD of photos of the wedding ceremony, formal poses after the wedding, and other wedding activities",
            "DVD of wedding ceremony",
          ].map((li) => (
            <ListItem disablePadding>
              <ListItemText primary={li} />
            </ListItem>
          ))}
        </List>
        <Typography variant="h4" component="h2">
          Package #1:
        </Typography>
        <Typography>
          <strong>
            Little Chapel or Garden Room Wedding with 1 - 6 Guests & No
            Attendants $395.00
          </strong>
        </Typography>
        <List>
          {[
            "Little chapel wedding ceremony for 1-6 guests and 0 attendants",
            "Use of Little Chapel for 1 hour with ordained minister with non-denominational Christian ceremony",
            "Lighted candles in brass candelabra & MP3 traditional wedding music",
            "Use of bouquet, boutonniere, & dressing rooms for the bride & groom",
            "Photo CD of the wedding ceremony, formal poses after the ceremony, & other wedding activities",
            "DVD of wedding ceremony & other wedding activities",
          ].map((li) => (
            <ListItem disablePadding>
              <ListItemText primary={li} />
            </ListItem>
          ))}
        </List>
        <Typography variant="h4" component="h2">
          Package #2:
        </Typography>
        <Typography>
          <strong>
            Little Chapel or Garden Room Wedding with 1-12 Guests and 0-5
            Attendants $495.00
          </strong>
        </Typography>
        <List>
          {[
            "Little Chapel wedding ceremony for 1-12 guests and 0-5 attendants",
            "Use of Little Chapel for 1 hour with ordained minister with non-denominational Christian ceremony",
            "Lighted candles in brass candelabra & MP3 traditional wedding music",
            "Use of bouquet, boutonniere, & dressing rooms for the bride & groom",
            "Photo CD of the wedding ceremony, formal poses after the ceremony, & other wedding activities",
            "DVD of wedding ceremony & other wedding activities",
          ].map((li) => (
            <ListItem disablePadding>
              <ListItemText primary={li} />
            </ListItem>
          ))}
        </List>
        <Typography variant="h4" component="h2">
          Package #3:
        </Typography>
        <Typography>
          <strong>
            Garden Room Wedding with 0-25 Guests and 0-5 Attendants $595.00
          </strong>
        </Typography>
        <List>
          {[
            "Garden Room wedding ceremony for 0-25 guests and 0-5 attendants",
            "Use of fully decorated Garden Room with indoor gazebo for 1 hour",
            "Ordained minister with non-denominational Christian ceremony",
            "Lighted candles in brass candelabra",
            "MP3 Traditional wedding music plus taper unity candle service",
            "Use of bouquet, boutonniere, & dressing rooms for the bride & groom",
            "Photo CD of the wedding ceremony, formal poses after the wedding with bride and/or groom and family groups with the bride and/or groom, and other wedding activities",
            "DVD of wedding ceremony & other wedding activities",
          ].map((li) => (
            <ListItem disablePadding>
              <ListItemText primary={li} />
            </ListItem>
          ))}
        </List>
        <Typography variant="h4" component="h2">
          Package #4:
        </Typography>
        <Typography>
          <strong>
            Chapel Wedding with 0-40 Guests and up to 7 Attendants $695.00
          </strong>
        </Typography>
        <List>
          {[
            "Chapel wedding ceremony for 0-40 guests and up to 7 Attendants",
            "Use of  decorated chapel with 22-foot cathedral ceiling for 1 hour",
            "Ordained minister with non-denominational Christian ceremony",
            "Lighted candles in brass candelabra",
            "MP3 Traditional  wedding music plus taper unity candle service",
            "Use of bouquet, boutonniere, & dressing rooms for the bride & groom",
            "Photo CD of the wedding ceremony, formal poses after the wedding with bride and/or groom and family groups with the bride and/or groom, and other wedding activities",
            "DVD of wedding ceremony & other wedding activities",
          ].map((li) => (
            <ListItem disablePadding>
              <ListItemText primary={li} />
            </ListItem>
          ))}
        </List>
        <Typography variant="h4" component="h2">
          Package #5:
        </Typography>
        <Typography>
          <strong>
            Garden Room Ceremony & Reception for 0-25 Guests and up to 5
            Attendants $1195.00
          </strong>
        </Typography>
        <List>
          {[
            "Garden Room wedding with services of ordained minister with non-denominational Christian ceremony",
            "Use of fully decorated Garden Room & dressing room for up to 2 hours.",
            "Lighted candles, MP3 traditional wedding music, plus tapered unity candle service",
            "Use of silk bouquet & boutonniere for the bride & groom ( or bring your own flowers)",
            "Photo CD of wedding ceremony, formal poses after the wedding of bride and groom and family groups with the bride and /or groom, and other wedding activities",
            "DVD of wedding ceremony & other wedding activities First Dance before reception",
            "Setup and cleanup of Garden Reception Room Use of china plates, silver servers, glass cups, napkins, crystal toasting glasses, punch bowl & cake topper",
            "Two-tiered, columned, all white decorated wedding cake plus all chocolate decorated groom's cake",
            "Sandwich tray featuring ham, turkey & cheese roll-ups plus a tray of Italian meatballs with barbecue sauce",
            "Seasonal fresh fruit tray plus a crispy vegetable tray served with ranch dip",
            "Cheese ball or Cheese with Ritz crackers and a tray of assorted salty snacks (Ghardettos,Fritos, Goldfish, etc.)",
            "Assorted fancy cookies and dry roasted peanuts.",
            "Frosty berry punch & coffee with assorted creamers & sweeteners",
          ].map((li) => (
            <ListItem disablePadding>
              <ListItemText primary={li} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h4" component="h2">
          Package #6:
        </Typography>
        <Typography>
          <strong>
            Chapel Wedding with Reception for 0-40 Guests and up to 7 Attendants
            $1495.00
          </strong>
        </Typography>
        <List>
          {[
            "Chapel wedding with services of ordained minister with non-denominational Christian ceremony",
            "Use of fully decorated Chapel, Garden Room & dressing rooms for up to 2 hours",
            "Lighted candles in brass candelabra, tapered unity candle service & MP3 traditional wedding music",
            "Use of silk bouquet & boutonniere for the bride & groom (or bring your own flowers)",
            "Photo CD of wedding ceremony, formal poses after the wedding with bride and/or groom and family groups with the bride and/or groom, and other wedding activities such as cake cutting, toasting, etc.",
            "DVD of wedding ceremony, reception & other wedding activities",
            "Personalized wedding invitations with envelopes",
            "First dance & MP3 reception music",
            "Setup & cleanup of Chapel & Garden Reception Room",
            "Use of china plates, silver servers, glass cups, napkins, crystal toasting glasses, punch bowl & cake toppe",
            "Two-tiered, columned, all white decorated wedding cake plus all chocolate decorated groom's cake",
            "Sandwich tray featuring ham, turkey, & cheese roll-ups plus a tray of Italian meatballs with barbecue sauce",
            "Seasonal fresh fruit tray plus a crispy vegetable tray served with ranch dip",
            "Cheese ball or Cheese with Ritz crackers and a tray of assorted salty snacks (Ghardettos, Fritos,Goldfish, etc.)",
            "Assorted fancy cookies and dry roasted peanuts.",
            "Frosty berry punch & coffee with assorted creamers & sweeteners",
          ].map((li) => (
            <ListItem disablePadding>
              <ListItemText primary={li} />
            </ListItem>
          ))}
        </List>
        <hr />
      </Grid>
    </Grid>
  );
}
