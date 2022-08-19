import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function Aboutus() {
  return (
    <Card>
      <Typography variant="h4">About Us</Typography>
      <CardMedia
        component="img"
        height="300"
        image="https://www.treehugger.com/thmb/K1h7GiF_jn-1YQIos2vqfebvSdQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography
          sx={{ fontSize: 15, textAlign: "justify" }}
          variant="subtitle2"
          color="text.secondary"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          a eum doloribus quos numquam nam minima, debitis deleniti non vel? Id
          amet mollitia quidem unde saepe molestias fugit distinctio provident,
          soluta rem vel ullam hic quos voluptatem itaque eveniet earum
          veritatis facere, et ad voluptatibus autem? Adipisci porro provident
          aut! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          autem recusandae libero. Facere placeat eligendi magnam cupiditate
          assumenda consequatur. Consequatur?
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Aboutus;
