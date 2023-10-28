//import { useParams } from "react-router-dom";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { Box, Container, Link, Grid, Typography } from "@mui/material";
import CardContent from "./../components/CardContent";
import CardCategory from "./../components/CardCategory";
import React from "react";

export default function CategoryPage() {
  //const { category, slug } = useParams();

  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          backgroundImage:
            'url("https://www1.wdr.de/nachrichten/landespolitik/demonstration-wohlfahrtsverbaende-duesseldorf-landtag-116~_v-HDready.jpg")',
          height: "25em",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 70%",
          display: "flex",
          alignItems: "flex-end",
          paddingBottom: 6,
          zIndex: 0
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1),  rgba(0, 0, 0, 0))",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        ></div>

        <Container
          sx={{
            zIndex: 1
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "white", lineHeight: 1, marginBottom: 2 }}
          >
            Im a title in a category
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "white", maxWidth: "600px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            corrupti porro, dolore excepturi recusandae, nisi alias nam minus id
            deleniti commodi tempora rerum placeat quae nemo unde in possimus.
            Quis!
          </Typography>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={1} sx={{ paddingY: 6, paddingX: 4 }}>
          {[1, 2, 3, 5, 6, 8].map((card, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} xl={4} key={index}>
              <CardContent />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "primary.dark" }}>
        <Container>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              color: "white",
              padding: 4
            }}
          >
            Discover more about our content
          </Typography>
          <Grid
            container
            component="div"
            spacing={1}
            sx={{ paddingBottom: 6, paddingX: 4 }}
          >
            {["Cronicas", "Reportagens"].map((card, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index}>
                <CardCategory title={card} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={1} sx={{ paddingY: 6, paddingX: 4 }}>
          {[1, 2, 3, 5, 6, 8].map((card, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={index}>
              <CardContent />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
