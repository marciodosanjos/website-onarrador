import { useParams } from "react-router-dom";
import useData from "./../hooks/usePostsData";
import { useEffect, useState } from "react";
import { Box, Container, Link, Grid, Typography } from "@mui/material";
import React from "react";

export default function ArticlePage() {

  const data = useData()
  // const { category, slug } = useParams();
  // const postsData = useData();
  // const [postData, setPostData] = useState(null);

  // useEffect(() => {
  //   const findPost = async () => {
  //     const post = await postsData?.find(
  //       (post) =>
  //         post.slug === slug && post.categories![0] === parseInt(category)
  //     );
  //     setPostData(post);
  //   };

  //   findPost();
  // }, [slug, postsData]);

  // if (!postData) {
  //   return <div>Buscando post</div>;
  // }

  return (
    <>
      {/* <div>{postData.title.rendered}</div>
      <div>{postData.content.rendered.replace(/<\/?[^>]+(>|$)/g, "")}</div>
      <Link href={`/${category}`}>Voltar</Link> */}

      <Container>
        <Typography variant="h2" sx={{ marginY: 3 }}>
          Learn How to Pre-render Pages Using Static Generation with Next.js
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2
          }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
            alt=""
            width="50"
            height="50"
          />
          <Typography variant="subtitle2">Marcio dos Anjos</Typography>
        </Box>
      </Container>
    </>
  );
}
