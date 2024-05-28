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
          <h2>{contact.title}</h2>
          <div className={styles.socialGallery}>
            <a
              className={styles.contact_icn}
              href={contact.linkedin.link}
              target='_blank'
              title={contact.linkedin.title}
            >
              <Image
                src={contact.linkedin.icone}
                alt={contact.linkedin.alt}
                fill
                sizes='100vw'
              />
            </a>
            <a
              className={styles.contact_icn}
              href={`mailto:${contact.email.link}`}
              type='email'
              target='_blank'
              title={contact.email.title}
            >
              <Image
                src={contact.email.icone}
                alt={contact.email.alt}
                fill
                sizes='100vw'
              />
            </a>
            <a
              className={styles.contact_icn}
              href={contact.github.link}
              target='_blank'
              title={contact.github.title}
            >
              <Image
                src={contact.github.icone}
                alt={contact.github.alt}
                fill
                sizes='100vw'
              />
            </a>
          </div>
        </div>
        <div className={styles.cvDiv}>
          <h2>{data.cv.title}</h2>
          <div className={styles.cvIcn}>
            <Link href={data.cv.link} target='_blank' title={data.cv.title}>
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
