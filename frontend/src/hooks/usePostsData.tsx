import { gql, useQuery } from "@apollo/client";

const GET_MYPOSTS = gql`
  query Posts ($first: Int, $after: String) {
    posts (first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
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
    variables: {
      first: 100, 
    },
  });

  if (error) {
    console.log(error);
  }
  if (error) {
    console.log(error);
  }

  return { loading, error, data };
}
