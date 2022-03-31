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
        <Header title="Welcome to Worcester Ski Supply!" />
        <p className="description">
            [Click Here to Enter Worcester Ski Supply](https://csiltler.wixsite.com/worcesterskisupply)
        </p>
      </main>

      <Footer />
    </div>
  )
}
