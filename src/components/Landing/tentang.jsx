import DataImage from "../../data/data";
import {listTools,listProyek} from "../../data/data"

const tentang = () => {
  return (
    <>
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full  mx-auto bg-zinc-700 rounded-lg p-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img
            src={DataImage.HeroImage}
            alt="Foto Paneji"
            className="w-12 rounded-md mb-12 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Nabiil Fanezi, seorang Frontend Developer dan
            mahasiswa Informatika yang memiliki ketertarikan pada pengembangan
            aplikasi web modern. Saya percaya bahwa tampilan yang menarik dan
            pengalaman pengguna yang baik harus berjalan beriringan, sehingga
            setiap aplikasi yang saya bangun tidak hanya berfungsi dengan
            optimal, tetapi juga nyaman dan menyenangkan untuk digunakan.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Foto Paneji"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  4 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  2 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32" >
          <h1 className="text-4xl/snug font-bold mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang Digunakan</h1>
          <p className="w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
            Berikut adalah beberapa tools yang saya gunakan dalam pengerjaan
            proyek
          </p>
          <div className="tools-box mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

            {listTools.map(tool => (
              <div className="group flex items-center gap-3 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="tools image" className="w-12 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"  />
                <div>
                  <h4 className=" font-bold">{tool.nama}</h4>
                  <p className=" opacity-50">{tool.ket}</p>
                </div>
            </div>
            )) } 
          </div>
        </div>
      </div>
    </>
  )
}

export default tentang