import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container, Link, Grid, Typography } from "@mui/material";
import CardContent from "../components/CardContent";
import CardCategory from "../components/CardCategory";
import {Post, Posts} from "../context/ArticleContext"
import usePostsData from "../hooks/usePostsData";

export default function CategoryPage() {
  const {loading, error, data} = usePostsData()
  const { category, slug } = useParams();
  const postsData = data && data.posts && data.posts.nodes.filter((post: Post, index: number)=> post.categories.nodes[0].slug === category ? post : null) 
 
 
  interface CategoryItem {
    slug: string;
    name: string;
    imgURL: string;
  }

  const categoryItems: CategoryItem[] = [{name: 'Crônicas', slug: 'cronicas', imgURL: 'https://cdn.pixabay.com/photo/2023/11/21/10/12/tea-8402876_1280.png'}, {name: 'Reportagens', slug: 'reportagens', imgURL: 'https://cdn.pixabay.com/photo/2023/09/01/22/16/keyboard-8227845_1280.png'}, {name: 'Ensaios', slug: 'ensaios', imgURL: 'https://cdn.pixabay.com/photo/2023/06/22/15/15/ice-cream-8081692_1280.png'}]

  
  return (
    <>
      <Navbar />

      {postsData ? postsData.map((post: Post, index: number) => post && post.isSticky && (
         <Box
         sx={{
           position: "relative",
           backgroundImage:
             `url(${post.featuredImage.node.mediaItemUrl})`,
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
               "linear-gradient(to top, rgba(0, 0, 0, 2),  rgba(0, 0, 0, 0))",
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
          <Link href={`/build/${category}/${post.slug}`}>
           <Typography
             variant="h2"
             sx={{ color: "white", lineHeight: 1, marginBottom: 2 }}
           >
             {post.title}
           </Typography>
           <Typography
             variant="body1"
             sx={{ color: "white", maxWidth: "600px" }}
           >
            {post.excerpt.replace(/<\/?[^>]+(>|$)/g, "")}
           </Typography>
           </Link>
         </Container>
       </Box>
      )) : null
      }
    
      <Container>
        <Grid container spacing={1} sx={{ paddingY: 6, paddingX: 4 }}>
          { postsData ? postsData.map((post: Post, index: number) => post && post.isSticky === false && (

            <Grid item xs={12} sm={6} md={6} lg={6} xl={4} key={index}>
              <CardContent title={post.title} excerpt={post.excerpt.replace(/<\/?[^>]+(>|$)/g, "")} imageURL={post.featuredImage ? post.featuredImage.node.mediaItemUrl : ""} category={post.categories.nodes[0].slug} slug={post.slug} />
            </Grid>
          )).slice(0,3) : null}
        </Grid>

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
            
            {categoryItems
            .filter((categoryItem: CategoryItem) => categoryItem.slug !== category)
            .map((filteredItems: CategoryItem, index: number) => (
              <Grid key={index} item xs={12} sm={6} md={6} lg={6} xl={6}>
                <CardCategory title={filteredItems.name} imgURL={filteredItems.imgURL} />
                </Grid>
            ))}

          </Grid>
        </Container>
      </Box>

     

      <Grid container spacing={1} sx={{ paddingY: 6, paddingX: 4 }}>
          { postsData ? postsData.map((post: Post, index: number) => post && post.isSticky === false && (

            <Grid item xs={12} sm={6} md={6} lg={6} xl={4} key={index}>
              <CardContent title={post.title} excerpt={post.excerpt.replace(/<\/?[^>]+(>|$)/g, "")} imageURL={post.featuredImage ? post.featuredImage.node.mediaItemUrl : ""} category={post.categories.nodes[0].slug} slug={post.slug} />
            </Grid>
          )).slice(3,7) : null}
        </Grid>

      </Container>

      
     

      <Footer />
    </>
  );
}
