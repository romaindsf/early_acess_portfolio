import data from '../../data/data.json'
import CompetenceCard from '@/components/competenceCard/CompetenceCard'
import styles from './_competences.module.scss'

export default function Competences() {
  const competence = data.competences
  return (
    <section className={styles.competencesSection}>
      <h2>{competence.title}</h2>
      <CompetenceCard
        langIcn={competence.htmlcss.icone}
        description={competence.htmlcss.description}
      />
      <CompetenceCard
        langIcn={competence.js.icone}
        description={competence.js.description}
      />
      <CompetenceCard
        langIcn={competence.react.icone}
        description={competence.react.description}
      />
      <div className={styles.competencesTranversales}>
        <p>{competence.transversales.text}</p>
        <ul>
          {competence.transversales.liste.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
