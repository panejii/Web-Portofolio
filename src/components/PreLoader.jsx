import { useState,useEffect } from "react"
import SkeletonHero from './SkeletonHero.jsx'
import SkeletonNavbar from './SkeletonNavbar.jsx'
import App from "../App";
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const PreLoader = () => {
    
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setTimeout(() => setLoading(false), 3000);
    },[])

     return (
    <>
      {loading ? (
        <div>
            <SkeletonNavbar/>
            <SkeletonHero />
        </div>
        
      ) : (
        <div className="container mx-auto px-4">
            <Navbar />
            <App />
            <Footer />
        </div>
      )}
    </>
  );
}

export default PreLoader