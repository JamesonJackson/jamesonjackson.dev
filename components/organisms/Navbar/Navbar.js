import styles from './Navbar.module.scss'
import Link from "next/link"

function Navbar () {
  return (
    <nav className={styles.navbar}>
      <ul className="nav-items">
        <li className={styles['full-width']}>
          <Link href="/">Jameson Jackson</Link>
        </li>
        
        <li>
          <Link href="/About">About</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>

        <li>
          <Link href="/Projects">Projects</Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar;