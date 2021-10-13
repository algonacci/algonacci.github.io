import Link from 'next/link'
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div className='container'>
        <ul className={styles.list}>
          <li><Link href='/' passHref><h2>Eric Julianto</h2></Link></li>
          <li className={styles.item}><Link href="/about"><h2>About</h2></Link></li>
        </ul>
      </div>
    </header>
  )
}