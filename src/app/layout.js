import '../styles/_globals.scss'
import { NextSeo } from 'next-seo'
import { LocalBusiness, WebSite } from 'react-schemaorg'
import { icon } from '/assets/favicon/favicon-16x16.png'

export const metadata = {
  icons: {
    icon: '/icon-light.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body>
        <NextSeo
          title='Portfolio de Romain Faria'
          description='Découvrez le portfolio de Romain Faria, développeur web front-end.'
          canonical='https://rfaria.com'
          openGraph={{
            url: 'https://rfaria.com',
            title: 'Portfolio de Romain Faria',
            description:
              'Découvrez le portfolio de Romain Faria, développeur web front-end.',
            images: [
              {
                url: 'https://rfaria.com/og-image.jpg',
                width: 800,
                height: 600,
                alt: 'Portfolio de Romain Faria',
              },
            ],
            site_name: 'Portfolio de Romain Faria',
          }}
        />
        <LocalBusiness
          id='https://early-acess-portfolio-4sqm519yd-arietys-projects.vercel.app/'
          name='Romain Faria'
          description='Découvrez le portfolio de Romain Faria, développeur web front-end.'
          url='https://early-acess-portfolio-4sqm519yd-arietys-projects.vercel.app/'
          email='romaindsf@hotmail.fr'
          addressRegion='Île-de-France'
          addressCountry='FR'
        />
        <WebSite id='https://early-acess-portfolio-4sqm519yd-arietys-projects.vercel.app/' />
        <main>{children}</main>
      </body>
    </html>
  )
}
