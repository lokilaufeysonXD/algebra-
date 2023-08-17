import { Inter } from 'next/font/google'
import Navpage from '@/components/Navpage'
import Layout from '@/components/Layouts/Layout'
import NavpageBak from '@/components/Layouts/NavpageBak'
import Footer from '@/components/Layouts/footer'
import CartFormaCuadraticaContent from '@/components/FormaCuadratica/CartFormaCuadraticaContent'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout />
      <Navpage />
      <NavpageBak/>
      <CartFormaCuadraticaContent/>
      <Footer />
    </>
  )
}