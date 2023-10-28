import React from 'react';
import { Container, Box, Link, Grid, Paper, Typography } from '@mui/material';


interface Article {
  title: string;
  excerpt: string;
  image: string;
  link: string;
  categories: Categories,
  isSticky: boolean;
  slug: string;
  featuredImage: Medias
}

interface Category {
  name: string,
  slug: string,

}

interface Categories {
  nodes: Category[]
}

interface Articles {
  articles: Article[],
}

interface Image {
  altText: string,
  description: string,
  mediaItemUrl: string
}

interface Medias {
  node: Image
}

export default function CategoryHome({ articles, category }: Articles & {category: string}) {
  return (
  
    <Container sx={{borderTop: '1px solid', paddingTop: '2em'}}>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
       
          <Typography variant='h3'>
            {category}
          </Typography> 
          
        </Grid>
        <Grid item xs={12} sm={6}>
          { articles && articles.length > 0 && articles.map((article, index) => article.isSticky && (
            <Link href={`${article.categories.nodes[0].name}/${article.slug} ` }>
            <Box key={index}>
              <img src={article.featuredImage.node.mediaItemUrl} alt={article.title} style={{ width: '100%' }} />
              <Typography variant="h2" gutterBottom>
                {article.title}
              </Typography>
              <Typography variant="body2">
                {article.excerpt.replace(/<\/?[^>]+(>|$)/g, "")}
              </Typography>
            </Box>
            </Link>

          )) }

        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            {articles && articles.length > 0 && articles.slice(1).map((artigo: Article, index: number) => (
              
              <Link href={`${artigo.categories.nodes[0].name}/${artigo.slug} ` }>
              <div key={index}>
                <Typography variant="h4">
                  {artigo.title}
                </Typography>
                <Typography variant="body2">
                  {artigo.excerpt.replace(/<\/?[^>]+(>|$)/g, "")}
                </Typography>
              </div>
                </Link>

            ))}
          </Box>
        </Grid>
    </Grid>

    
    </Container>
  
  );
}
