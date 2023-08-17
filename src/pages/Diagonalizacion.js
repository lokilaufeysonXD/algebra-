import { Inter } from 'next/font/google'
import Layout from '@/components/Layouts/Layout'
import NavpageBak from '@/components/Layouts/NavpageBak'
import DiagonalizacionContent from '@/components/Diagonalizacion/DiagonalizacionContent'
import NavDiagonalizacion from '@/components/Diagonalizacion/NavDiagonalizacion'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Layout>
        <NavpageBak/>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <NavDiagonalizacion />
            </div>
            <div className='col-md-9'>
              <DiagonalizacionContent />
            </div>
          </div>
        </div> 
      </Layout>
  </main>
  )
}