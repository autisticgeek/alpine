import { List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const btnStyle = {
    p: { xs: "8px 0", md: "8px 16px" },
  };
  return (
    <List component="nav">
      <ListItemButton component="a" onClick={() => navigate("/")} sx={btnStyle}>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton
        component="a"
        onClick={() => navigate("/littlechapel")}
        sx={btnStyle}
      >
        <ListItemText primary="The Little Chapel" />
      </ListItemButton>
      <ListItemButton
        component="a"
        onClick={() => navigate("/gardenroom")}
        sx={btnStyle}
      >
        <ListItemText primary="The Garden Room" />
      </ListItemButton>
      <ListItemButton
        component="a"
        onClick={() => navigate("/chapel")}
        sx={btnStyle}
      >
        <ListItemText primary="The Chapel" />
      </ListItemButton>
      <ListItemButton
        component="a"
        onClick={() => navigate("/weddingpackages")}
        sx={btnStyle}
      >
        <ListItemText primary="Wedding Packages" />
      </ListItemButton>
      <ListItemButton
        component="a"
        onClick={() => navigate("/reception_menu")}
        sx={btnStyle}
      >
        <ListItemText primary="Reception Menu" />
      </ListItemButton>
      <ListItemButton
        component="a"
        onClick={() => navigate("/wedding_ceremony")}
        sx={btnStyle}
      >
        <ListItemText primary="Vows" />
      </ListItemButton>
      <ListItemButton component="a" href="./bookinginfo.pdf" sx={btnStyle}>
        <ListItemText primary="Booking Information" />
      </ListItemButton>
      <ListItemButton
        component="a"
        onClick={() => navigate("/photography__videography")}
        sx={btnStyle}
      >
        <ListItemText primary="Photos and DVD" />
      </ListItemButton>
      <ListItemButton
        component="a"
        onClick={() => navigate("/faqs")}
        sx={btnStyle}
      >
        <ListItemText primary="FAQ's" />
      </ListItemButton>
      <ListItemButton
        component="a"
        onClick={() => navigate("/marriagelicense")}
        sx={btnStyle}
      >
        <ListItemText primary="Marriage License" />
      </ListItemButton>
      <ListItemButton
        component="a"
        onClick={() => navigate("/area_maps")}
        sx={btnStyle}
      >
        <ListItemText primary="Area Maps" />
      </ListItemButton>
    </List>
  );
}
