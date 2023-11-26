import { useParams } from "react-router-dom";
import { Box, Container, Link, Grid, Typography } from "@mui/material";
import usePostsData from "./../hooks/usePostsData";
import { Post } from "./../context/ArticleContext";
import HeaderArticle from "./../components/HeaderArticle";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CardCategory from "../components/CardCategory";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
//import styles from "./../style/styles.css";

export default function ArticlePage() {
  const renderHTML = (html: any) => {
    return { __html: html };
  };

  const { data } = usePostsData();
  const { category, slug } = useParams();
  const postData =
    data &&
    data.posts &&
    data.posts.nodes.filter((post: Post, index: number) =>
      post.categories.nodes[0].slug === category && post.slug === slug
        ? post
        : null
    );

    const authorName = postData && postData[0] && postData[0].author && postData[0].author.node
    ? postData[0].author.node.firstName + " " + postData[0].author.node.lastName
    : "";
  

  const authorAvatar = postData && postData[0] && postData[0].author ? postData[0].author.node.avatar.url : null;

  const otherArticles =
    data &&
    data.posts &&
    data.posts.nodes
      .filter((post: Post, index: number) =>
        post.categories.nodes[0].slug === category && post.slug !== slug
          ? post
          : null
      )
      .slice(0, 3);

  return (
    <>
      <Navbar />
    {/* <div id="indicator"> Hello</div>
     */}
      <HeaderArticle
        title={postData && postData[0] && postData[0].title ? postData[0].title : null}
        srcImg={postData && postData[0] ? postData[0].featuredImage.node.mediaItemUrl : null}
        excerpt={
          postData && postData[0] ? postData[0].excerpt.replace(/<\/?[^>]+(>|$)/g, "") : null
        }
        category={postData && postData[0] ? postData[0].categories.nodes[0].name : null}
        authorAvatar={authorAvatar}
        authorName={authorName}
        altText={"Alt text"}
        copyrightPhoto={"Copy"}
      />
      <Container 
        fixed
        sx={{
          textAlign: "center",
          marginTop: "1em",
          marginBottom: "1em"
        }}
      >
        <Grid container spacing={6} >
          <Grid item sm={12} md={8}>
            {postData && postData[0] ? (
              <div
                dangerouslySetInnerHTML={renderHTML(postData[0].content)}
                style={{ textAlign: "start" }}
              />
            ) : null}
          </Grid>
          <Grid
            component="div"
            item
            sm={12}
            md={3}
            sx={{
              marginTop: "1em",
              order: "-1"
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                textAlign: "start"
              }}
            >
              Follow uns on Social Media
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                position: "sticky",
                top: "10px"
              }}
            >
              <InstagramIcon fontSize="large" />
              <FacebookIcon fontSize="large" />
              <YouTubeIcon fontSize="large" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "primary.dark" }}>
        <Container>
          <Grid
            container
            gap={2}
            sx={{ justifyContent: "center", paddingY: "2em" }}
          >
            <Grid item md={12}>
              <Typography
                variant="h4"
                sx={{ color: "white", textAlign: "center", fontWeight: "bold" }}
              >
                Related Articles
              </Typography>
            </Grid>

            {otherArticles
              ? otherArticles.map((article: Post, index: number) => (
                  <Grid item sm={8} md={3}>
                    <CardCategory
                      key={index}
                      title={article ? article.title : ""}
                      imgURL={
                        article && article.featuredImage
                          ? article.featuredImage.node.mediaItemUrl
                          : ""
                      }
                    />
                  </Grid>
                ))
              : null}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
