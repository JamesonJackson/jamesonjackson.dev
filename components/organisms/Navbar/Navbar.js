import styles from './Navbar.module.scss'
import Link from 'next/link'

function Navbar ({title, subtitle}) {
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref={true}>
        <h1 className={styles.title}>{title}</h1>
      </Link>
      { subtitle && <p className={styles.subtitle}>{subtitle}</p> }
    </nav>
  )
}

export default Navbar;