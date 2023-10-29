import { useParams } from "react-router-dom";
import { Box, Container, Link, Grid, Typography } from "@mui/material";
import usePostsData from "./../hooks/usePostsData";
import  {Post} from "./../context/ArticleContext";

export default function ArticlePage() {
  const {loading, error, data} = usePostsData()
  const {category, slug} = useParams()
  const postData = data && data.posts && data.posts.nodes.filter((post: Post, index: number) => post.categories.nodes[0].name === category && post.slug === slug ? post : null)

  return (
    <>
      <Container>
        <Typography variant="h2" sx={{ marginY: 3 }}>
          { postData ? postData[0].title : null}
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
        <Typography variant="h4" sx={{ marginY: 3 }}>
          {postData ? postData[0].excerpt.replace(/<\/?[^>]+(>|$)/g, "") : null}
        </Typography>
      </Container>
    </>
  );
}
