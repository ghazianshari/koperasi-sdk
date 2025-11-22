import Image from "next/image";

const HubungiKami = () => {
  return (
    <section
      id="kontak"
      className="scroll-mt-16 w-full flex flex-col-reverse md:grid md:grid-cols-2 min-h-[350px] bg-white"
    >
      {/* LEFT INFO */}
      <div
        data-aos="fade-right"
        data-aos-duration="900"
        className="bg-[#008000] text-white p-8 sm:p-12 flex flex-col justify-center space-y-4 md:space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold">Hubungi Kami</h2>
        <p className="text-sm sm:text-base leading-relaxed text-justify">
          Kami selalu siap membantu menjawab pertanyaan Anda dan memberikan
          informasi yang dibutuhkan.
        </p>

        <div className="space-y-5 text-sm sm:text-base mt-2">
          {/* ALAMAT */}
          <div className="flex items-start gap-3">
            <Image
              src={"/assets/location-logo.png"}
              alt="location-logo"
              width={28}
              height={28}
              className="w-6 h-6 object-contain"
            />
            <p>Alamat: [Alamat Lengkap]</p>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-3">
            <Image
              src={"/assets/wa-logo.png"}
              alt="wa-logo"
              width={28}
              height={28}
              className="w-6 h-6 object-contain"
            />
            <p>Telepon/WhatsApp: [Nomor]</p>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-3">
            <Image
              src={"/assets/email-logo.png"}
              alt="email-logo"
              width={28}
              height={28}
              className="w-6 h-6 object-contain"
            />
            <p>bahagia@selaludengankamu.com</p>
          </div>
        </div>
      </div>

      {/* RIGHT MAP */}
      <div data-aos="fade-in" data-aos-duration="800">
        <div className="w-full h-[250px] sm:h-[350px] md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42275577.16058454!2d95.93751516203211!3d-2.2759975872736554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d82607fd9a2781f%3A0x301f8f1fc28ca40!2sIndonesia!5e0!3m2!1sen!2sid!4v1708570000"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0 w-full h-full"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HubungiKami;
