import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import FeaturedPost from "./../components/FeaturedPost";
import CategoryHome from "./../components/CategoryHome";
import React from "react";
import usePostsData from "./../hooks/usePostsData";
import DuasColunas from "../components/Teste"
const categoryItems = [
  {
    category: "Ensaios",
    imgURL:
      "https://ensinarhistoria.com.br/s21/wp-content/uploads/2016/12/Senado-romano_Maccari-Cicero-1024x638.jpg"
  },
  // {
  //   category: "Reportagens",
  //   imgURL:
  //     "https://www.institutoclaro.org.br/educacao/wp-content/uploads/sites/2/2023/04/Fundo.png"
  // },
  // {
  //   category: "Cronicas",
  //   imgURL:
  //     "https://offloadmedia.feverup.com/saopaulosecreto.com/wp-content/uploads/2020/02/28082202/180315131158-osgemeos-self-portrait-tease-super-169-1024x576.jpg"
  // }
];

interface Post {
  title: string,
  isSticky: boolean,
  slug: string,
  categories: Categories,
  excerpt: string,
  featuredImage: Medias

}

interface Category {
  name: string,
  slug: string,

}

interface Categories {
  nodes: Category[]
}

interface Image {
  altText: string,
  description: string,
  mediaItemUrl: string
}

interface Medias {
  node: Image
}

export default function HomePage() {
const {loading, error, data} = usePostsData()
const postData = data && data.posts && data.posts.nodes

const artigos = [
  {
    title: 'Artigo 1',
    excerpt: 'Este é o resumo do artigo 1.',
    image: 'https://s4.static.brasilescola.uol.com.br/be/2020/03/sociedade.jpg',
    link: '/artigo1',
    isSticky: true
  },
  {
    title: 'Artigo 2',
    excerpt: 'Este é o resumo do artigo 2.',
    image: 'imagem2.jpg',
    link: '/artigo2',
    isSticky: false
  },
  {
    title: 'Artigo 3',
    excerpt: 'Este é o resumo do artigo 3.',
    image: 'https://s4.static.brasilescola.uol.com.br/be/2020/03/sociedade.jpg',
    link: '/artigo3',
    isSticky: false
  },
  // Adicione mais objetos de artigo conforme necessário
];

  return (
    <>
      <Navbar />
      {
        postData ? postData.map(
        (post: Post, index: number) => post.isSticky == true && (
          <FeaturedPost
          key={index}
          link={`/${post.categories.nodes[0].name}/${post.slug}`}
          title={post.title}
          category={post.categories.nodes[0].name}
          excerpt={post.excerpt}
          srcImg={post.featuredImage.node.mediaItemUrl
}
          altText={"alttext"}
          copyrightPhoto={"fotos"}
        />
        )
        ) : <div>carregando</div>
      }

    
      {categoryItems.map((categoryItem, index) => (
        <CategoryHome articles={postData} category={categoryItem.category}/>
      ))}
      
      <Footer />
    </>
  );
}
