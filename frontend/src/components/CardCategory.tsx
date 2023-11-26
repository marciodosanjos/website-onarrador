import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CardCategory(props: { title: string, imgURL?:string }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="285"
          image={props.imgURL}
          alt="green iguana"
        />
        <CardContent sx={{ backgroundColor: "primary.dark" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            sx={{ color: "white" }}
          >
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
