import { Inter } from 'next/font/google'
import Navpage from '@/components/Layouts/Navpage'
import Layout from '@/components/Layouts/Layout'
import Footer from '@/components/Layouts/footer'
import CartDiagonalizacion from '@/components/Diagonalizacion/CartDiagonalizacion'

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
            <CartDiagonalizacion/>
          </div>
          <div className='col-md-4'>
            <CartDiagonalizacion/>            
          </div>
        </div>
      </div>        
      {/* <Footer /> */}
    </>
  )
}
