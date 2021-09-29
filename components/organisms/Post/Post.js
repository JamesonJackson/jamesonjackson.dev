import { PostHeader } from '../../molecules/PostHeader/PostHeader'
import styles from './Post.module.scss'

export default function Post({children, meta}) {
  return (
    <div className={styles.container}>
      <PostHeader className={styles.header} meta={meta} isBlogPost={true}/> 
      <article className={styles.article}>{children}</article>
    </div>
  )
}
