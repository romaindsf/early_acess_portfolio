'use client'
import { useState } from 'react'
import styles from './_projets.module.scss'
import Image from 'next/image'
import data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ProjectButton from '@/components/projectButton/ProjectButton'

export default function Projets() {
  const projet = data.projets
  const [active, setActive] = useState(1)
  const handleClick = (index) => {
    setActive(index)
  }
  return (
    <section className={styles.projetSection}>
      <h2>{projet.title}</h2>
      <div className={styles.galleryImg}>
        <Image
          src={projet.kasa.picture}
          alt={projet.kasa.alt}
          width={600}
          height={400}
          className={active === 1 ? styles.active : ''}
          onClick={() => {
            handleClick(1)
          }}
        />
        <Image
          src={projet.ohmyfood.picture}
          alt={projet.ohmyfood.alt}
          width={600}
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
            {projet.kasa.description.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
          <div className={styles.linkDiv}>
            <ProjectButton href={projet.kasa.link.github} text='Lien gitHub' />
            <ProjectButton
              href={projet.kasa.link.website}
              text='Lien gitHub Pages'
            />
          </div>
        </div>
        <div
          className={`${styles.ohMyFoodDescription} ${
            active === 2 ? styles.active : ''
          }`}
        >
          <ul>
            {projet.ohmyfood.description.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
          <div className={styles.linkDiv}>
            <ProjectButton
              href={projet.ohmyfood.link.github}
              text='Lien gitHub'
            />
            <ProjectButton
              href={projet.ohmyfood.link.website}
              text='Lien gitHub Pages'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
