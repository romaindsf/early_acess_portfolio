import styles from './_projectButton.module.scss'

export default function ProjectButton({ href, text }) {
  return (
    <button className={styles.project__button} href={href} target='_blank'>
      {text}
    </button>
  )
}
