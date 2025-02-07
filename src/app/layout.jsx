import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

import Image from 'next/image'
import Logo from '../../public/np.png'

import { Outfit } from 'next/font/google'

const oufit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})
 
// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>

const navbar = (
  <Navbar
    logo={
      <>
        <Image src={Logo} alt='Logo' width={24} height={24} />
        <b style={{ paddingLeft: 10 }}>Norland Productions</b>
      </>
    }
  />
)

const footer = <Footer>{new Date().getFullYear()} © Norland Productions</Footer>

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={oufit.className}
    >
      <Head
        color={{
          hue: 264,
          saturation: 81,
          lightness: {
            light: 82,
            dark: 82
          },
        }}
        backgroundColor = {{
          dark: '#1f1f1f',
          light: '#f1f3f5'
        }}
      >
        <link rel="icon" type="image/x-icon" href="/np.ico" />
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/norlandprod/docs/tree/main/docs"
          editLink={null}
          feedback={{
            content: null
          }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}