import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <style>
          body {
            background-image: url("pages/jump.png");
          }
        </style>
  
  
        <title>Worcester Ski Supply</title>
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
    
      <main>
        


//         <Header title="Welcome to Worcester Ski Supply 123" />
        <Header title="Caleb is gay" />
        <p className="description">
          <a href="https://csiltler.wixsite.com/worcesterskisupply"> Click Here to Enter </a>
        </p>
       
      </main>
   
      <Footer />
    </div>
  )
}
