import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import FeaturedPost from "./../components/FeaturedPost";
import CategoryHome from "./../components/CategoryHome";
import React from "react";
import usePostsData from "./../hooks/usePostsData";

const categoryItems = [
  {
    category: "Ensaios",
    imgURL:
      "https://ensinarhistoria.com.br/s21/wp-content/uploads/2016/12/Senado-romano_Maccari-Cicero-1024x638.jpg"
  },
  {
    category: "Reportagens",
    imgURL:
      "https://www.institutoclaro.org.br/educacao/wp-content/uploads/sites/2/2023/04/Fundo.png"
  },
  {
    category: "Cronicas",
    imgURL:
      "https://offloadmedia.feverup.com/saopaulosecreto.com/wp-content/uploads/2020/02/28082202/180315131158-osgemeos-self-portrait-tease-super-169-1024x576.jpg"
  }
];

export default function HomePage() {
const {loading, error, data} = usePostsData()
const postData = data && data.posts && data.posts.nodes

  return (
    <>
      <Navbar />
      {
        postData ? postData.map(
        (post, index) => post.isSticky == true && (
          <FeaturedPost
          key={index}
          link={`/${post.categories.nodes[0].name}/${post.slug}`}
          title={post.title}
          category={post.categories.nodes[0].name}
          excerpt={post.categories}
          srcImg={
            "https://buffer.com/cdn-cgi/image/w=7000,fit=contain,q=90,f=auto/library/content/images/2023/10/free-images.jpg"
          }
          altText={"alttext"}
          copyrightPhoto={"fotos"}
        />
        )
        ) : <div>carregando</div>
      }

    

      {categoryItems.map((categoryItem, index) => (
        <CategoryHome
          key={index}
          category={categoryItem.category}
          imgURL={categoryItem.imgURL}
        />
      ))}

      <Footer />
    </>
  );
}
