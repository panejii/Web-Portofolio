import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import App from '../App'

import Hero from '../components/Landing/Hero'
import Tentang from '../components/Landing/tentang'
import Proyek from '../components/Landing/proyek'
import Kontak from '../components/Landing/kontak'

const Landing = () => {
  return (
    <div className='container mx-auto'>
        <Navbar/>
        
        <Hero />
        <Tentang />
        <Proyek />
        <Kontak />

        <Footer/>
    </div>
  )
}

export default Landing