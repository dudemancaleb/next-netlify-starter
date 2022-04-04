import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div className="container">
      <html lang="en">
        <Head>
          <style>
            div.withBgImage {
              background-image: url("https://upload.wikimedia.org/wikipedia/commons/8/84/Ski_Famille_-_Family_Ski_Holidays.jpg");
            }
          </style>

          <title>Worcester Ski Supply</title>
          <link rel="icon" href="/favicon.ico" />
       
        </Head>
    
        <body>
          <div class="withBgImage">This will have a background image.</div>
          <p class="withBgImage">This will NOT have a background image.</p>
        </body>
      </html>


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
