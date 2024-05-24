/* eslint-disable react/no-unescaped-entities */
import CompetenceCard from '@/components/competenceCard/CompetenceCard'
import styles from './_competences.module.scss'

export default function Competences() {
  return (
    <section className={styles.competencesSection}>
      <h2>Mes Compétences</h2>
      <CompetenceCard
        langIcn='/assets/IconeLangage/html_css_icn.png'
        description='Compétent en HTML et Css, je suis capable de transformer des maquettes en sites Web fonctionnels et responsives .'
      />
      <CompetenceCard
        langIcn='/assets/IconeLangage/Js_icn.png'
        description='Mes connaissances en Javascript me mermettent 
            de développer des applications web intéractives, 
            capables de gérer des événements, 
            de manipuler le DOM et intéragir avec des API .'
      />
      <CompetenceCard
        langIcn='/assets/IconeLangage/react_icn.png'
        description="Avec une solide maîtrise de React, 
            j'ai développé du code modulaire et 
            des composants réutilisables. 
            Je suis à l'aise avec JSX, l'utilisation de React Router, 
            ainsi que la gestion de contexte, même complexe, 
            avec Redux Toolkit."
      />
      <div className={styles.competencesTranversales}>
        <p>
          Au-delà des compétences techniques, cette formation m'a permis de
          développer <br />
          des compétences transversales cruciales tels que:
        </p>
        <ul>
          <li>La plannification du développement d'un site web</li>
          <li>L'optimisation du SEO</li>
          <li>Le débuggage de site</li>
        </ul>
      </div>
    </section>
  )
}
