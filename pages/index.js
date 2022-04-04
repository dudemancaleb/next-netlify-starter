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
        <style>
          background-image:
            linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
            url('jump.png');
        </style>
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
