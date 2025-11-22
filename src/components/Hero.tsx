import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 relative flex h-auto min-h-[400px] sm:min-h-[450px] md:h-[calc(100vh-71px)]"
    >
      {/* BACKGROUND IMAGE */}
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="absolute right-0 top-0 bottom-0 w-full md:w-[864px]"
      >
        <Image
          src="/assets/orang-tos.png"
          alt="orang-tos"
          fill
          className="object-cover md:object-cover lg:object-center"
        />
      </div>

      {/* GRADIENT */}
      <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-[#008000] from-45% via-[#4FB80C]/40 via-60% to-transparent to-70%" />
      <div className="lg:hidden absolute inset-0 bg-linear-to-r from-[#008000] from-0% via-[#4FB80C]/40 via-60% to-transparent to-70%" />

      {/* CONTENT */}
      <div
        data-aos="fade-right"
        data-aos-delay="350"
        className="relative flex-1 flex flex-col justify-center px-6 md:px-16 text-white space-y-6 max-w-2xl z-10 py-8 md:py-0"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
          Solusi Finansial yang Aman, Nyaman, dan Bersahabat
        </h1>

        <p className="text-sm sm:text-lg">
          Dari simpanan hingga pinjaman, kami hadir dengan layanan yang mudah,
          transparan, dan penuh kepedulian.
        </p>

        <p className="text-xs sm:text-base">
          Akses aplikasi &quot;Selalu Dengan Kamu&quot; di handphone Anda.
        </p>

        <div className="mt-2">
          <Image
            data-aos="zoom-in"
            data-aos-delay="500"
            src={"/assets/get-it-on-gp.png"}
            alt="playstore"
            width={170}
            height={60}
            className="cursor-pointer hover:scale-105 transition w-[140px] sm:w-[170px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
