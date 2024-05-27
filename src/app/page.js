import data from '../data/data.json'
import Presentation from '@/section/presentation/Presentation'
import styles from '../styles/_page.module.scss'
import Projets from '@/section/projets/Projets'
import Competences from '@/section/competences/Competences'
import Contact from '@/section/contact/Contact'

export default function Home() {
  return (
    <>
      <div className={styles.grid}>
        <h1>{data.title}</h1>
        <Presentation />
      </div>
      <Competences />
      <Projets />
      <Contact />
    </>
  )
}
