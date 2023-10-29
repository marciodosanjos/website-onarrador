import { gql, useQuery } from "@apollo/client";

const GET_MYPOSTS = gql`
  query Posts {
    posts {
      nodes {
        excerpt
        isSticky
        date
        categories {
          nodes {
            name
            slug
            description
          }
        }
        id
        link
        postId
        slug
        title
        content
        tags {
          edges {
            node {
              name
            }
          }
        }
        featuredImage {
          node {
            altText
            description
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export default function usePostData() {
  const { loading, error, data } = useQuery(GET_MYPOSTS, {
    variables: {}, // Passa um objeto vazio se a consulta não requer variáveis.
  });

  if (error) {
    console.log(error);
  }
  if (error) {
    console.log(error);
  }

  return { loading, error, data };
}
