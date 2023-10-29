
export interface Post {
    title: string,
    isSticky: boolean,
    slug: string,
    date: string,
    categories: Categories,
    excerpt: string,
    featuredImage: Medias
  
  }

  export interface Posts {
    postData: Posts[]
  }
  
 export  interface Category {
    name: string,
    slug: string,
  }
  
 export  interface Categories {
    nodes: Category[]
  }
  
 export  interface Image {
    altText: string,
    description: string,
    mediaItemUrl: string
  }
  
  export interface Medias {
    node: Image
  }

  export type CategoryHomeProps = {
    posts: Post[];
    category: string;
  };