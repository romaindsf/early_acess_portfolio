'use client'
import { useState } from 'react'
import styles from './_projets.module.scss'
import Image from 'next/image'
import data from '../../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import ProjectLink from '@/components/projectLink/ProjectLink'

export default function Projets() {
  const projet = data.projets
  const [active, setActive] = useState(1)
  const handleClick = (index) => {
    setActive(index)
  }
  return (
    <section className={styles.projetSection}>
      <h2>{projet.title}</h2>
      <div>
        <div className={styles.kasaProject}>
          <div className={styles.thumbnailDiv}>
            <Image
              src={projet.kasa.picture}
              alt={projet.kasa.alt}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className={active === 1 ? styles.active : ''}
              onClick={() => {
                handleClick(1)
              }}
            />
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={active === 1 ? styles.active : ''}
          />
          <div
            className={`${styles.kasaDescription} ${
              active === 1 ? styles.active : ''
            }`}
          >
            {projet.kasa.description.map((elem, index) => (
              <p key={index}>{elem}</p>
            ))}
          </div>
          <div
            className={`${styles.linkDiv} ${active === 1 ? styles.active : ''}`}
          >
            <ProjectLink href={projet.kasa.link.github} text='Lien gitHub' />
            <ProjectLink href={projet.kasa.link.website} text='Lien du site' />
          </div>
        </div>
        <div className={styles.omfProject}>
          <div className={styles.thumbnailDiv}>
            <Image
              src={projet.ohmyfood.picture}
              alt={projet.ohmyfood.alt}
              fill
              sizes='100vw'
              className={active === 2 ? styles.active : ''}
              onClick={() => {
                handleClick(2)
              }}
            />
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={active === 2 ? styles.active : ''}
          />
          <div
            className={`${styles.ohMyFoodDescription} ${
              active === 2 ? styles.active : ''
            }`}
          >
            {projet.ohmyfood.description.map((elem, index) => (
              <p key={index}>{elem}</p>
            ))}
          </div>
          <div
            className={`${styles.linkDiv} ${active === 2 ? styles.active : ''}`}
          >
            <ProjectLink
              href={projet.ohmyfood.link.github}
              text='Lien gitHub'
            />
            <ProjectLink
              href={projet.ohmyfood.link.website}
              text='Lien du site'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
