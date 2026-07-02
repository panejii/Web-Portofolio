const Footer = () => {
  return (
    <div className="mt-32 p-4 flex md:flex-row md:gap-0 flex-col gap-6 items-center justify-between">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-6">
            <a href="">Beranda</a>
            <a href="">Tentang</a>
            <a href="">Proyek</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="">
                <i className="ri-tiktok-fill ri-2x"></i>
            </a>
            <a href="">
                <i className="ri-youtube-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer