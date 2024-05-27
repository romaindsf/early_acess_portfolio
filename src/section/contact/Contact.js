import Link from 'next/link'
import styles from './_contact.module.scss'
import Image from 'next/image'
import data from '../../data/data.json'

export default function Contact() {
  const contact = data.contact

  return (
    <section className={styles.contactSection}>
      <div>
        <div>
          <h3>{contact.title}</h3>
          <div className={styles.socialGallery}>
            <a href={contact.linkedin.link} target='_blank'>
              <Image
                src={contact.linkedin.icone}
                alt={contact.linkedin.alt}
                width={150}
                height={150}
              />
            </a>
            <a
              href={`mailto:${contact.email.link}`}
              type='email'
              target='_blank'
            >
              <Image
                src={contact.email.icone}
                alt={contact.email.alt}
                width={150}
                height={150}
              />
            </a>
            <a href={contact.github.link} target='_blank'>
              <Image
                src={contact.github.icone}
                alt={contact.github.alt}
                width={150}
                height={150}
              />
            </a>
          </div>
        </div>
        <div className={styles.cvDiv}>
          <h3>{data.cv.title}</h3>
          <div className={styles.cvIcn}>
            <Link href={data.cv.link} target='_blank'>
              <Image
                src={data.cv.icone}
                alt={data.cv.alt}
                width={150}
                height={150}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
