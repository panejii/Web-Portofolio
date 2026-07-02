
import {listProyek} from "../../data"

const proyek = () => {
  return (
    <>
        
              <div className="proyek mt-32 p-12" id="proyek">
                  <h1 className=" text-4xl text-center font-bold mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
                  <p className=" text-base text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut adalah beberapa proyek yang telah saya buat</p>
                  <div className="proyek-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12 gap-3">
                    {listProyek.map(proyek => (
                      <div key={proyek.id} className="p-6 bg-zinc-800" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
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
              
    </>
  )
}

export default proyek