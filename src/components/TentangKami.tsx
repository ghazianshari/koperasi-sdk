import Image from "next/image";

const TentangKami = () => {
  return (
    <section
      id="tentang"
      className="relative scroll-mt-16 flex py-16 px-6 md:px-16 bg-gray-50 lg:h-[calc(100vh-71px)] overflow-hidden"
    >
      {/* === BACKGROUND ILLUSTRATION === */}
      <Image
        src="/assets/bg-illustration-tentang-kami.png"
        alt="bg-illustration-tentang-kami"
        width={700}
        height={700}
        className="hidden md:block absolute right-0 -top-80 pointer-events-none select-none opacity-90"
      />
      <Image
        src="/assets/bg-illustration-tentang-kami.png"
        alt="bg-illustration-tentang-kami"
        width={700}
        height={700}
        className="md:hidden absolute right-0 -top-44 pointer-events-none select-none opacity-90"
      />

      {/* === CONTENT WRAPPER === */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* LEFT - Logo Card */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex items-center justify-center"
        >
          <div className="border bg-white border-gray-200 shadow-md rounded-lg p-6 w-full max-w-xs sm:max-w-sm aspect-square flex items-center justify-center">
            <Image
              src="/assets/logo-card.jpg"
              alt="logo-card"
              width={350}
              height={350}
              className="w-3/4 h-auto object-contain"
            />
          </div>
        </div>

        {/* RIGHT - Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="flex flex-col justify-center space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800">Tentang Kami</h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
            Koperasi Konsumen{" "}
            <span className="font-semibold text-green-700">
              SELALU DENGAN KAMU{" "}
            </span>
            adalah mitra terpercaya bagi anggota dalam membangun kemandirian
            ekonomi. Kami mengutamakan transparansi, keamanan, dan kebersamaan
            dalam layanan, khususnya pada bidang simpan pinjam.
          </p>

          {/* Bullet Points */}
          <div className="space-y-4 pt-2">
            {[
              "Berdiri sejak [tahun]",
              "Berlandaskan semangat kebersamaan",
              <>
                Legalitas lengkap{" "}
                <span className="text-green-600 font-semibold">
                  NIB, NPWP, SKT, SK MENKUMHAM
                </span>
              </>,
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-4 h-4 rounded-full bg-linear-to-br from-[#008000] to-[#4FB80C] shrink-0 mt-1" />
                <p className="text-gray-700 font-medium text-sm sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
