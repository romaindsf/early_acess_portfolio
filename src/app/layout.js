import '../styles/_globals.scss'

export const metadata = {
  title: 'Portfolio de Romain Faria',
  description: 'Développeur Web Junior',
  openGraph: {
    title: 'Portfolio de Romain Faria',
    description:
      'Découvrez le portfolio de Romain Faria, développeur web junior.',
    url: 'https://rfaria.com',
    siteName: 'Portfolio de Romain Faria',
    locale: 'fr_FR',
    type: 'website',
  },
}
export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'http://schema.org/',
    '@type': 'Person',
    'name': 'Romain FARIA',
    'url':
      'https://early-acess-portfolio-9aej2syqq-arietys-projects.vercel.app/',
    'jobTitle': 'Développeur front-end',
  }
  return (
    <html lang='fr'>
      <body>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main>{children}</main>
      </body>
    </html>
  )
}
