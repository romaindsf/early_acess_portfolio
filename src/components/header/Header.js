import styles from './_header.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <Link href='#'>A propos</Link>
        <Link href='#'>Compétences</Link>
        <Link href='#'>Projets</Link>
        <Link href='#'>CV</Link>
      </nav>
    </header>
  )
}
