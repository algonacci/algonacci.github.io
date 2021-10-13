import styles from './Footer.module.css';
import Link from 'next/link'

const url = 'https://www.linkedin.com/in/ericjulianto/'

export default function Footer() {
  return (
    <div className={styles.title}>
      <Link href={url}>
          <a target="_blank">Made with ❤️ by Eric Julianto</a>
      </Link>
    </div>
  );
}