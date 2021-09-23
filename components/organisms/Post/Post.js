import { PostHeader } from '../../molecules/PostHeader/PostHeader'

export default function Post({ children, meta}) {
  return (
    <>
      <PostHeader meta={meta} isBlogPosts/>
      
      <article>{children}</article>
    </>
  )
}
