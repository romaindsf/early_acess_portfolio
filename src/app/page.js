import Presentation from '@/section/presentation/Presentation'
import styles from '../styles/_page.module.scss'
import Projets from '@/section/projets/Projets'
import Competences from '@/section/competences/Competences'

export default function Home() {
  return (
    <>
      <h1>
        Romain Faria <br />
        Developpeur front-end
      </h1>
      <Presentation />
      <Competences />
      <Projets />
    </>
  )
}
