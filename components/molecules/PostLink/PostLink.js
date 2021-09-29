import Link from 'next/link';
import { PostHeader } from '../PostHeader/PostHeader';

export const PostLink = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    <article>
      <PostHeader meta={meta} />
      
      <Link href={"/blog" + link}>
        <a>Read more &rarr;</a>
      </Link>
    </article>
  );
};
