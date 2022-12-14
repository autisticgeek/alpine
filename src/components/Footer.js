import { Box, Link, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      variant="footer"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt:3 }}
    >
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Typography component="address">
          Alpine Wedding Chapel - P.O. Box 1343 Helen, GA 30545
        </Typography>
      </Box>

      <Box
        sx={{ display: { xs: "flex", sm: "none" }, flexDirection:"column", alignItems:"center" }}
        alignContent="center"
      >
        <Typography>Alpine Wedding Chapel</Typography>
        <Typography component="address">
          P.O. Box 1343 Helen, GA 30545
        </Typography>
      </Box>
      <Typography>
        <Link href="tel:17068785683">706-TrueLove (878-5683)</Link> Toll Free:
        <Link href="tel:18008739351">1-800-873-9351</Link>
      </Typography>
      <Typography>
        Email:
        <Link href="mailto:alpineweddingchapel@windstream.net">
          alpineweddingchapel@windstream.net
        </Link>
      </Typography>
      <Typography>
        <strong style={{ color: "#008000" }}>Open By Appointment Only.</strong>
      </Typography>
      <Link href="./policies.pdf" target="_blank">
        POLICIES
      </Link>
    </Box>
  );
}
