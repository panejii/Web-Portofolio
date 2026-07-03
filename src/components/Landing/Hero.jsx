import DataImage from "../../data/data"

const Hero = () => {
  return (
    <>
        <div className="hero grid grid-cols-1 md:grid-cols-2 pt-6 items-center xl:gap-0 gap-6 ">
        <div className="animate__animated animate__fadeInUp">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="pinjai"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Beuh bikin web portofolio make React+Tailwind CSS euy</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Saya, Fanezi siap mengguncang dunia{" "}
          </h1>
          <p className="text-base/loose opacity-50 mb-6">
            Saya adalah seorang Frontend Developer yang berfokus pada
            pengembangan antarmuka web yang interaktif, responsif, dan ramah
            pengguna. Menggunakan React, Tailwind CSS, dan berbagai teknologi
            modern, saya berkomitmen menghadirkan pengalaman digital yang
            menarik sekaligus fungsional.{" "}
          </p>
          <div className="flex items-center md:gap-6 gap-3">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600  "
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="panji"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-1s"
          loading="lazy"
        />
      </div>
    </>
  )
}

export default Hero