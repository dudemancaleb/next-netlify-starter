

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
          <a href="https://csiltler.wixsite.com/worcesterskisupply"> Click Here to Enter </a>
        </p>
       
      </main>
   
      <Footer />
    </div>
  )
}
<html>
<body>

<h1>Hello World!</h1>

<button type="button" onclick="myFunction()">Set background color</button>

<script>
function myFunction() {
  document.body.style.backgroundColor = "red";
}
</script>

</body>
</html>
