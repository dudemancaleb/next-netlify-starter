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
          h1 {
            color: blue;
            background-color: yellow;
            border: 1px solid black;
          }

          p {
            color: red;
          }
        </style>
            
        </style>
      <main>
        


        <Header title="Welcome to Worcester Ski Supply 123" />
        <p className="description">
          <a href="https://csiltler.wixsite.com/worcesterskisupply"> Click Here to Enter </a>
        </p>
       
      </main>
   
      <Footer />
    </div>
  )
}
