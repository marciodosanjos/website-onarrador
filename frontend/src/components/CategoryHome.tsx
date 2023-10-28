import { Box, Container, Link, Grid, Typography } from "@mui/material";
import React from "react";

export default function CategoryHome(props: {
  category: string;
  imgURL: string;
}) {
  return (
    <Container sx={{ marginY: 5 }}>
      <Typography
        sx={{
          fontSize: "3em",
          fontWeight: "bold",
          borderTop: "1px solid",
          marginBottom: 4
        }}
      >
        {props.category}
      </Typography>
      <Grid container spacing={3} sx={{ wrap: "noWrap" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          sx={
            {
              // border: "1px solid",
              //paddingLeft: "0px !important",
              // paddingTop: "0px !important",
            }
          }
        >
          <Link href={"wwww.google.com"} target="_blank">
            <img
              src={props.imgURL}
              alt={"Alt Text"}
              width={900}
              height={0}
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
            />
            <Box sx={{ paddingY: 1 }}>
              <Typography variant="h4">
                Título de destaque para testar como fica com duas linhas
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus iste, minima voluptate perferendis tempore quam
                mollitia sequi vitae.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textTransform: "uppercase",
                  color: "primary.main",
                  marginTop: 1
                }}
              >
                Autor
              </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid
          className="artigos"
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: 4
          }}
        >
          <Box>
            <Link href={"wwww.google.com"} target="_blank">
              <Typography variant="h4">
                Título de destaque para testar como fica com duas linhas
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textTransform: "uppercase",
                  color: "primary.main",
                  marginTop: 1
                }}
              >
                Autor do texto
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link href={"wwww.google.com"} target="_blank">
              <Typography variant="h4">
                Título de destaque para testar como fica com duas linhas
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textTransform: "uppercase",
                  color: "primary.main",
                  marginTop: 1
                }}
              >
                Autor do texto
              </Typography>
            </Link>
          </Box>
          <Box>
            <Link href={"wwww.google.com"} target="_blank">
              <Typography variant="h4">
                Título de destaque para testar como fica com duas linhas
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textTransform: "uppercase",
                  color: "primary.main",
                  marginTop: 1
                }}
              >
                Autor do texto
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
