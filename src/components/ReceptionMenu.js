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

export default function ReceptionMenu() {
  return (
    <Grid item xs container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h1">
          Reception Menu
        </Typography>
      </Grid>

      <Grid
        item className="sidePictures"
      >
        <Typography><u>Alpine Wedding Chapel Reception Menu*</u></Typography>

        <List>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>
              Wedding Cake
              <Typography variant="body2">
                2 - tiered all white wedding cake decorated with white roses,
                shells, etc.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>Chocolate Groom’s Cake</ListItemText>
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>
              Assorted flatbread rollup sandwiches:
              <Typography variant="body2">
                Turkey, bacon, and ranch on flatbread, Provolone & Sun-dried
                tomatoes on wheat, turkey & pepper jack cheese on herbed
                flatbread
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>
              Crispy Vegetables with Ranch Dip
              <Typography variant="body2">
                i.e., carrots, broccoli, cauliflower, celery, cherry tomatoes,
                etc.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>
              Assorted Fresh Seasonal Fruit
              <Typography variant="body2">i.e., melon, strawberries, grapes, kiwi, oranges, cherries, etc.</Typography>
            </ListItemText>
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>
              Festive Cookie Assortment
              <Typography variant="body2">i.e., wedding, sugar, cinnamon, chocolate chip, etc.</Typography>
            </ListItemText>
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>Italian Meatballs with Barbecue Sauce</ListItemText>
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>
              Herb Nut Cheeseball or Cheese Cubes with Ritz crackers
            </ListItemText>
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>
              Assorted Salty Snacks
              <Typography variant="body2">i.e., Ghardettos, Fritos, Goldfish, pretzels, Bugles, etc.</Typography>
            </ListItemText>
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>Honey or Dry Roasted Peanuts</ListItemText>
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>
              Hot Coffee with Assorted Sweeteners & Creamers
            </ListItemText>
          </ListItem>
          <ListItem disablePadding sx={{ display: "list-item" }}>
            <ListItemText>Frosty Berry Punch</ListItemText>
          </ListItem>
        </List>
        <Typography>
          *Substitutions may be made based on availability of food items.
        </Typography>
        <hr />
      </Grid>
    </Grid>
  );
}
