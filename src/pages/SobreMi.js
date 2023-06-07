import { Inter } from 'next/font/google'
import NavpageBak from '@/components/Layouts/NavpageBak'
import Layout from '@/components/Layouts/Layout'
import Footer from '@/components/Layouts/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <center>
        <Layout />
        <NavpageBak />
        <h1>Jose Ramon Arias Borges</h1>
        <h2>twitter: twitter.com/jose_laufeyson</h2>
        <h2>linkeding: https://www.linkedin.com/in/jose-ramon-arias-borges-b91654209/</h2>
        <h2>git: https://github.com/lokilaufeysonXD</h2>
        
        <a href="../index.php" class="btn btn-secondary" >INICIO</a>
      </center>
      <Footer />
    </>
  )
}
