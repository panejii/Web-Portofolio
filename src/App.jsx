import DataImage from "./data";
import {listTools,listProyek} from "./data"

const App = () => {
  return (
    <>
      <div className="hero grid grid-cols-1 md:grid-cols-2 pt-6 items-center xl:gap-0 gap-6 ">
        <div>
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
              Lihat Proyek <i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="panji"
          className="w-[500px] md:ml-auto"
          loading="lazy"
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full  mx-auto bg-zinc-700 rounded-lg p-4">
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

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-3">Tools yang Digunakan</h1>
          <p className="w-2/5 text-base/loose opacity-50">
            Berikut adalah beberapa tools yang saya gunakan dalam pengerjaan
            proyek
          </p>
          <div className="tools-box mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

            {listTools.map(tool => (
              <div className="group flex items-center gap-3 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800" key={tool.id}>
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
      {/* tentang */}

      {/* Proyek */}
      <div className="proyek mt-32 p-12">
          <h1 className=" text-4xl text-center font-bold mb-3">Proyek</h1>
          <p className=" text-base text-center opacity-50">Berikut adalah beberapa proyek yang telah saya buat</p>
          <div className="proyek-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12 gap-3">
            {listProyek.map(proyek => (
              <div key={proyek.id} className="p-6 bg-zinc-800">
                <img src={proyek.gambar} alt="Proyek Image" className=" w-full" loading="lazy" />
                <div>
                  <h1 className=" text-2xl font-bold my-3">{proyek.nama}</h1>
                  <p className="text-base/loose mb-3">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p className=" py-1 px-3 border border-zinc-500 bg-zinc-700 rounded-md font-semibold" key={index}>{tool}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a href="#" className="bg-violet-700 p-3 block rounded-md border border-zinc-700 hover:bg-violet-600">Lihat Website</a>
                </div>
              </div>
            ))}
          </div>
      </div>
      {/* Proyek */}

      {/* Form Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0">
        <h1 className=" text-4xl text-center font-bold mb-3">Kontak</h1>
        <p className="text-base/loose text-center opacity-50 mb-10">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/faneziaja@gmail.com" method="POST" className="bg-zinc-800 p-12 mx-auto sm:w-fit w-full rounded-md" autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="Nama Pengirim" placeholder="Masukan Nama..." required className="border border-zinc-500 p-3 rounded-md"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="Email Pengirim" placeholder="Masukan Email..." required className="border border-zinc-500 p-3 rounded-md"/>            
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">Pesan</label>
              <textarea name="pesan" id="pesan " cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-3 rounded-md" required></textarea>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <button type="submit" className="font-semibold" className="bg-violet-700 w-full cursor-pointer p-3 block rounded-md border border-zinc-700 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Form Kontak */}
    </>
  );
};

export default App;
