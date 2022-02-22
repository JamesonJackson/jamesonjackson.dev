import Navbar from "../components/organisms/Navbar/Navbar";
import { posts } from "../api/getPosts";
import { PostLink } from "../components/molecules/PostLink/PostLink";
import SocialBar from "../components/organisms/SocialBar/SocialBar";

export default function IndexPage() {
  return (
    <>
      <Navbar 
        title="DAEBOOK" 
        subtitle="a code journal"
      />
      
      <main>
        {
          posts.map((post) => (
            <PostLink key={post.link} post={post} />
          ))
        }
      </main>
    </>
  );
}
