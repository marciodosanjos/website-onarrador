import { Link, Box, Container, Typography, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#dcdcdc"
      }}
    >
      <Container fixed component="footer">
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "center",
            paddingY: 2,
            marginTop: 12
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4}
            sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "start"
              },
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Our Sections</Typography>
            <Link href={"/ensaios"}>Ensaios</Link>
            <Link href={"/reportagens"}>Cronicas</Link>
            <Link href={"/cronicas"}>Reportagens</Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4}
            sx={{ textAlign: "center" }}
          >
            <Typography>
              <strong> O Narrador &copy; {currentYear} </strong> <br /> All
              rigthts common rigthts
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={4}
            sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "end"
              }
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Follow us on Social Media
            </Typography>
            <InstagramIcon fontSize="medium" />
            <FacebookIcon fontSize="medium" />
            <YouTubeIcon fontSize="medium" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
