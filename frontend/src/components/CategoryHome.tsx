import React from 'react';
import { Container, Box, Link, Grid, Paper, Typography } from '@mui/material';
import {Post, Posts, CategoryHomeProps } from "./../context/ArticleContext";

function sortDataPost(a: Post, b: Post) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA.getTime() - dateB.getTime();
}

export default function CategoryHome({ posts, category }: CategoryHomeProps) {
  return (
  
    <Container sx={{borderTop: '1px solid', paddingY: '2em'}}>  
      <Grid container spacing={4}>
        <Grid item xs={12}>
       
          <Typography sx={{textTransform: 'uppercase',  backgroundColor: "primary.main", textAlign: "center", padding: 1, width: 200,            color: "white"}}>
            {category}
          </Typography> 
          
         
        </Grid>
        <Grid item xs={12} sm={6}>
          { posts && posts.length > 0 && posts.map((post: Post, index: number) => post.isSticky && (
            <Link href={`/build/${post.categories.nodes[0].name}/${post.slug} ` }>
            <Box className="box" key={index} sx={{
                //border: "1px solid",
                
              }}>
              <img src={post.featuredImage.node.mediaItemUrl} alt={post.title}  style={{
                  objectFit: "contain",
                  width: "100%",
                 
                  
                }} />
              <Typography variant="h2">
                {post.title}
              </Typography>
              <Typography variant="body1">
                {post.excerpt.replace(/<\/?[^>]+(>|$)/g, "")}
              </Typography>
            </Box>
            </Link>

          )) }


        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            {posts && posts.length > 0 && posts.filter((post: Post, index: number)=> post.isSticky !== true).map((post: Post, index: number) => (
              
              <Link href={`/build/${post.categories.nodes[0].name}/${post.slug} ` }>
              <div key={index}>
                <Typography variant="h4" sx={{marginBottom: 2}}>
                  {post.title}
                </Typography>
                <Typography variant="body2">
                  {post.excerpt.replace(/<\/?[^>]+(>|$)/g, "")}
                </Typography>
              </div>
                </Link>

            )).slice(0,3).sort().reverse()}
          </Box>
        </Grid>
    </Grid>

    
    </Container>
  
  );
}
