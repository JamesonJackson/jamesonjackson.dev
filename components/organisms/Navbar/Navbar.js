import styles from './Navbar.module.scss'
import Link from 'next/link'

function Navbar () {
  return (
    <nav className={styles.navbar}>
      <ul className="nav-items">
        <li className={styles['full-width']}>
          <Link href="/">JAMESON JACKSON</Link>
        </li>

        {/* <li>
          <Link href="/">twitter</Link>
        </li>

        <li>
          <Link href="/">linkedIn</Link>
        </li>

        <li>
          <Link href="/">github</Link>
        </li> */}
      </ul>

    </nav>
  )
}

export default Navbar;