import styles from './_competenceCard.module.scss'
import Image from 'next/image'

export default function CompetenceCard({ langIcn, description }) {
  return (
    <div className={styles.competenceCard}>
      <Image
        src={langIcn}
        alt={`icone de ${langIcn}`}
        width={150}
        height={150}
      />
      <p>{description}</p>
    </div>
  )
}
