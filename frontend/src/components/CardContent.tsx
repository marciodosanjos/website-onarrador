import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Link } from "@mui/material";

export default function ActionAreaCard(props: {title: string, excerpt: string, imageURL: string, category: string, slug: string}) {
  return (
    <Card>
      <Link href={`/${props.category}/${props.slug}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={props.imageURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
