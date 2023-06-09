import { Inter } from 'next/font/google'
import Navpage from '@/components/Layouts/Navpage'
import Layout from '@/components/Layouts/Layout'
import Footer from '@/components/Layouts/footer'
import CartDiagonalizacion from '@/components/Diagonalizacion/CartDiagonalizacion'
import CartFormaCuadratica from '@/components/FormaCuadratica/CartFormaCuadratica'
import CartHerramientasInformaticas from '@/components/herramientas_informaticas/CartHerramientasInformaticas'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout />
      <Navpage />
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <CartDiagonalizacion/>
          </div>
          <div className='col-md-4'>
            <CartFormaCuadratica/>
          </div>
          <div className='col-md-4'>
            <CartHerramientasInformaticas/>            
          </div>
        </div>
      </div>        
      {/* <Footer /> */}
    </>
  )
}
