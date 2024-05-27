import data from '../../data/data.json'
import styles from './_presentation.module.scss'

export default function Presentation() {
  return (
    <section className={styles.presentationSection}>
      {data.présentation.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </section>
  )
}
