import { useState,useEffect } from "react"

const Navbar = () => {

    const [active, setActive] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 150){
                setActive(true);
            }else{
                setActive(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return() =>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo bg-white text-black md:text-white md:bg-transparent">
                <h1 className="text-3xl font-bold">Portofolio</h1>
            </div>
            <ul className={`menu flex sm:gap-12 gap-6 items-center md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0   md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none
                ${
                    active ? "top-0 opacity-100" : "-top-10 opacity-0"
                 }`}>
                <li><a href="#" className="sm:text-lg text-base font-medium"></a>Beranda</li>
                <li><a href="#" className="sm:text-lg text-base font-medium"></a>Tentang</li>
                <li><a href="#" className="sm:text-lg text-base font-medium"></a>Proyek</li>
                <li><a href="#" className="sm:text-lg text-base font-medium"></a>Kontak</li>
            </ul>
        </div>
    )
}

export default Navbar