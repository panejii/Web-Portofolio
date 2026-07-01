import DataImage from "./data";

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
        />
      </div>

      {/* tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full  mx-auto bg-zinc-700 rounded-lg p-4">
          <img
            src={DataImage.HeroImage}
            alt="Foto Paneji"
            className="w-12 rounded-md mb-12 sm:hidden"
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
          <div className="tool-box"></div>
        </div>
      </div>
      {/* tentang */}
    </>
  );
};

export default App;
