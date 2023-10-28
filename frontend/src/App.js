import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import React from 'react';
import AppRoutes from "./Routes";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { __DEV__ } from "@apollo/client/utilities/globals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// Configuração do Apollo Client
const client = new ApolloClient({
  uri: 'https://onarrador.com/graphql',
  cache: new InMemoryCache(),
});

if (__DEV__) {  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export default function App() {
  return (
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppRoutes />
      </div>
    </ThemeProvider>
    </ApolloProvider>
  );
}
 