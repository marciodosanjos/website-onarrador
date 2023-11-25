import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedPost from "../components/FeaturedPost";
import CategoryHome from "../components/CategoryHome";
import usePostsData from "../hooks/usePostsData";
import  {Post, Category} from "../context/ArticleContext";

export default function HomePage() {
const {loading, error, data} = usePostsData();
const postData = data && data.posts && data.posts.nodes;
const categoryItems = postData && postData.map((post: Post) => {return post.categories.nodes[0].name}).filter(function (category: string, pos: number, self: any) {
  return self.indexOf(category) == pos
});
const featuredPost = postData && postData.filter((post: Post) => { return post.isSticky }).sort().slice(0,1)[0];

console.log(featuredPost);

  return (
    <>
      <Navbar />
       { featuredPost ? (
          <FeaturedPost
          link={`/build/${featuredPost && featuredPost.categories && featuredPost.categories.nodes[0].slug}/${featuredPost.slug}`}
          title={featuredPost.title}
          category={featuredPost && featuredPost.categories && featuredPost.categories.nodes[0].name}
          excerpt={featuredPost.excerpt}
          srcImg={featuredPost && featuredPost.categories && featuredPost.featuredImage.node.mediaItemUrl
}
          altText={"altext"}
          copyrightPhoto={"fotos"}
        />
       ) : <div>carregando</div>
      }
      
    
      {categoryItems && categoryItems.map((categoryItem: any, index: number) => (
        <CategoryHome posts={postData.filter((post: Post)=> post && post.categories.nodes[0].name === categoryItem)} category={categoryItem}/>
      ))}
      
      <Footer />
    </>
  );
}
