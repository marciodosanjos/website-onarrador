import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Artigo {
  titulo: string
  resumo: string
  imagem: string
  link: string
  isSticky: boolean
}

interface Artigos {
  artigos: Artigo[],
  
}

function ArtigosEmDuasColunas({artigos}: Artigos ) {
  return (
    <Grid container spacing={3}>
      {artigos.map((artigo: Artigo, index: number) => (
        <Grid item xs={12} sm={6} key={index}>

          {artigo.isSticky ? (

          <Paper elevation={3} style={{ padding: '16px' }}>
          <img src={artigo.imagem} alt={artigo.titulo} style={{ width: '100%' }} />
          <Typography variant="h6" gutterBottom>
            {artigo.titulo}
          </Typography>
          <Typography variant="body2">
            {artigo.resumo}
          </Typography>
          </Paper>
          ) : (
            <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6" gutterBottom>
              {artigo.titulo}
            </Typography>
            <Typography variant="body2">
              {artigo.resumo}
            </Typography>
            </Paper>
          )}


          
        </Grid>
      ))}
    </Grid>
  );
}

export default ArtigosEmDuasColunas;
