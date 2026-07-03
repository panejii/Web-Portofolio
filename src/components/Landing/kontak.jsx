const kontak = () => {
  return (
    <>
        {/* Form Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className=" text-4xl text-center font-bold mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center opacity-50 mb-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/faneziaja@gmail.com" method="POST" className="bg-zinc-800 p-12 mx-auto sm:w-fit w-full rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" data-aos-once="true">
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
  )
}

export default kontak