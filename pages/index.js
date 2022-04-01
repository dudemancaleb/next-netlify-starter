

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    document.body.style.backgroundImage = "url('jump.png')";
    <div className="container">
      <Head>
        <title>Worcester Ski Supply</title>
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      <main>
        <Header title="Welcome to Worcester Ski Supply!" />
        <p className="description">
          <a href="https://csiltler.wixsite.com/worcesterskisupply"> Click Here to Enter </a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
  
