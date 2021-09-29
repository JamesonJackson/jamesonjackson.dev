import styles from './PostHeader.module.scss';

export const PostHeader = ({ meta, isBlogPost }) => {
  return (
    <>
      <h1 className={styles.title}>
        {meta.title}
      </h1>

      <div className={styles.details}>
        {
          isBlogPost || !meta.description ?
          null :
          <p className={styles.description}>{meta.description}</p>
        }

        <span>{meta.date}</span>

        <span>&#8212;</span>

        <span
          role='img'
          aria-label='one coffee'
        >
          ☕ {`${meta.readTime}min read`}
        </span>
      </div>
    </>
  )
}

