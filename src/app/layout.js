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
  return (
    <html lang='fr'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
