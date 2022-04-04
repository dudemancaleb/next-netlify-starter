import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
     div.withBgImage {
       background-image: url("jump.png");
     }
    </style>
  </head>
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
