/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react'
import styles from './_projets.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Projets() {
  const [active, setActive] = useState(1)
  const handleClick = (index) => {
    setActive(index)
  }
  return (
    <section className={styles.projetSection}>
      <h2>Mes projets</h2>
      <div className={styles.galleryImg}>
        <Image
          src='/assets/SiteVignette/kasa.avif'
          alt='Icone du site Kasa'
          width={500}
          height={400}
          className={active === 1 ? styles.active : ''}
          onClick={() => {
            handleClick(1)
          }}
        />
        <Image
          src='/assets/SiteVignette/omf.avif'
          alt='Icone du site Oh My Food'
          width={500}
          height={400}
          className={active === 2 ? styles.active : ''}
          onClick={() => {
            handleClick(2)
          }}
        />
      </div>
      <div className={styles.chevronDown}>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={active === 1 ? styles.active : ''}
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          className={active === 2 ? styles.active : ''}
        />
      </div>
      <div className={styles.descriptionProjet}>
        <div
          className={`${styles.ohMyFoodDescription} ${
            active === 1 ? styles.active : ''
          }`}
        >
          <ul>
            <li>
              Le front-end de l'application a été implémenté en utilisant React
              et initialisé à l'aide de Create React App.
            </li>
            <li>
              React Router a été utilisé pour configurer la navigation entre les
              différentes pages de l'application.
            </li>
            <li>Les données sont extraites depuis un fichier JSON.</li>
            <li>
              L'interface du site est constituée de différents composants
              rendant le code modulaire, réutilisable et aisément maintenable.
            </li>
          </ul>
          <a
            href='https://github.com/romaindsf/RD_P8_creez_une_application_web_de_location_immobiliere_avec_react'
            target='_blank'
          >
            Lien gitHub
          </a>
          <a
            href='https://romaindsf.github.io/RD_P8_creez_une_application_web_de_location_immobiliere_avec_react/'
            target='_blank'
          >
            Lien gitHub Pages
          </a>
        </div>

        <div
          className={`${styles.ohMyFoodDescription} ${
            active === 2 ? styles.active : ''
          }`}
        >
          <ul>
            <li>
              Cette maquette a été développée avec les langages HTML et CSS en
              mobile-first, tout en étant responsive.
            </li>
            <li>
              L'utilisation de Sass a été privilégiée dans le but de rendre le
              code plus organisé et maintenable.
            </li>
            <li>
              Des animations CSS sont présentes, rendant la navigation
              interactive et engageante.
            </li>
          </ul>
          <a
            href='https://github.com/romaindsf/RD_P4_Am-liorez_linterface_dun_site_mobile_avec_des_animations_CSS'
            target='_blank'
          >
            Lien gitHub
          </a>
          <a
            href='https://romaindsf.github.io/RD_P4_Am-liorez_linterface_dun_site_mobile_avec_des_animations_CSS/'
            target='_blank'
          >
            Lien gitHub Pages
          </a>
        </div>
      </div>
    </section>
  )
}
