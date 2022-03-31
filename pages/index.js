import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Worcester Ski Supply</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title=[Click here to enter Worcester Ski Supply](https://csiltler.wixsite.com/worcesterskisupply) />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
