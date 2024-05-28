import styles from './_projectLink.module.scss'

export default function ProjectLink({ href, text }) {
  return (
    <a className={styles.project__link} href={href} target='_blank'>
      {text}
    </a>
  )
}
