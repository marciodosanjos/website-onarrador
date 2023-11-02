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
  
    <Container sx={{borderTop: '1px solid', paddingTop: '2em'}}>  
      <Grid container spacing={3}>
        <Grid item xs={12}>
       
          <Typography variant='h3'>
            {category}
          </Typography> 
          
        </Grid>
        <Grid item xs={12} sm={6}>
          { posts && posts.length > 0 && posts.map((post: Post, index: number) => post.isSticky && (
            <Link href={`/app/${post.categories.nodes[0].name}/${post.slug} ` }>
            <Box className="box" key={index} sx={{
                border: "1px solid",
                
              }}>
              <img src={post.featuredImage.node.mediaItemUrl} alt={post.title}  style={{
                  objectFit: "contain",
                  width: "100%",
                 
                  
                 // Defina a altura desejada
                }} />
              <Typography variant="h2" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body2">
                {post.excerpt.replace(/<\/?[^>]+(>|$)/g, "")}
              </Typography>
            </Box>
            </Link>

          )) }


        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            {posts && posts.length > 0 && posts.filter((post: Post, index: number)=> post.isSticky !== true).map((post: Post, index: number) => (
              
              <Link href={`/app/${post.categories.nodes[0].name}/${post.slug} ` }>
              <div key={index}>
                <Typography variant="h4">
                  {post.title}
                </Typography>
                <Typography variant="body2">
                  {post.excerpt.replace(/<\/?[^>]+(>|$)/g, "")}
                </Typography>
              </div>
                </Link>

            )).slice(0,3).sort()}
          </Box>
        </Grid>
    </Grid>

    
    </Container>
  
  );
}
