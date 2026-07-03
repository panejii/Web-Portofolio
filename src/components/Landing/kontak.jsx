import { useState } from "react";
import { sendMessage } from "../../services/messageService";

const kontak = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await sendMessage(formData);

      alert("Pesan berhasil dikirim!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Gagal mengirim pesan!");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
        {/* Form Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className=" text-4xl text-center font-bold mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center opacity-50 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya</p>
        <form onSubmit={handleSubmit} className="bg-zinc-800 p-12 mx-auto sm:w-fit w-full rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="name" placeholder="Masukan Nama..." required className="border border-zinc-500 p-3 rounded-md" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..." required className="border border-zinc-500 p-3 rounded-md" value={formData.email} onChange={handleChange}/>            
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">Pesan</label>
              <textarea name="message" id="message" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-3 rounded-md" required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <button type="submit" className="font-semibold" className="bg-violet-700 w-full cursor-pointer p-3 block rounded-md border border-zinc-700 hover:bg-violet-600" disabled={loading}>{loading ? "mengirim..." : "Kirim Pesan"}</button>
            </div>
          </div>
        </form>
      </div>
      {/* Form Kontak */}
    </>
  )
}

export default kontak