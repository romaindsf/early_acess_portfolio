import Presentation from '@/section/presentation/Presentation'
import styles from '../styles/_page.module.scss'
import Projets from '@/section/projets/Projets'
import Competences from '@/section/competences/Competences'
import Contact from '@/section/contact/Contact'

export default function Home() {
  return (
    <>
      <div className={styles.grid}>
        <h1>
          Romain Faria <br />
          Developpeur front-end
        </h1>
        <Presentation />
      </div>
      <Competences />
      <Projets />
      <Contact />
    </>
  )
}
