import { Link, AppBar, Typography, Toolbar } from "@mui/material";
import React from "react";

const categories = ["Cronicas", "Ensaios", "Reportagens"];

export default function Header() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#primary.main" }}>
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <Link href={"/build"}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "3em",
                textDecoration: "none",
                color: "white"
              }}
            >
              O NARRADOR
            </Typography>
          </Link>
        </Toolbar>
        <Toolbar
          variant="dense"
          sx={{
            backgroundColor: "white",
            color: "black",
            justifyContent: "center"
          }}
        >
          {categories.map((category, index) => (
            <Link
              href={`/build/${category.toLowerCase()}`}
              key={index}
              sx={{
                color: "black",
                marginRight: 1,
                textDecoration: "none",
                fontSize: "1.5em",
                "&:hover": { textDecoration: "underline" }
              }}
            >
              {category}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
}
