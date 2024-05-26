import Link from 'next/link'
import styles from './_contact.module.scss'
import Image from 'next/image'

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div>
        <div>
          <h3>Contact</h3>
          <div className={styles.socialGallery}>
            <Link href='#'>
              <Image
                src='/assets/IconeSocial/linkedin_icn.png'
                alt='icone Linkedin'
                width={150}
                height={150}
              />
            </Link>
            <Link href='#' type='email'>
              <Image
                src='/assets/IconeSocial/email_icn.png'
                alt='icone email'
                width={150}
                height={150}
              />
            </Link>
            <Link href='#'>
              <Image
                src='/assets/IconeSocial/github_icn.png'
                alt='icone email'
                width={150}
                height={150}
              />
            </Link>
          </div>
        </div>
        <div className={styles.cvDiv}>
          <h3>Mon CV :</h3>
          <div className={styles.cvIcn}>
            <Link href='#'>
              <Image
                src='/assets/IconeSocial/cv_icn.webp'
                alt='icone de CV'
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
