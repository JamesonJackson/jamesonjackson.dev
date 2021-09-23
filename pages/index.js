import { PostLink } from "../components/molecules/PostLink/PostLink";
import { posts } from "../api/getPosts";

export default function IndexPage() {
  return (
    <>
      {posts.map((post) => (
        <PostLink key={post.link} post={post} />
      ))}
    </>
  );
}
