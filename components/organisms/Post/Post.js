import { PostHeader } from '../../molecules/PostHeader/PostHeader'

export default function Post({children, meta}) {
  return (
    <>
      <PostHeader meta={meta} isBlogPost={true}/>
      
      <article>{children}</article>
    </>
  )
}
