import Image from "next/image";

const ProdukDanLayanan = () => {
  return (
    <section
      id="produk"
      className="scroll-mt-16 sm:scroll-mt-20 relative py-20 px-6 md:px-16 bg-[#FAFFF7] lg:min-h-[calc(100vh-71px)]"
    >
      {/* === BACKGROUND ILLUSTRATION === */}
      <Image
        src="/assets/bg-illustration-produk.png"
        alt="bg-illustration-produk"
        width={700}
        height={700}
        className="hidden md:block absolute -top-32 left-0 pointer-events-none select-none opacity-90 z-0"
      />
      <Image
        src="/assets/bg-illustration-produk.png"
        alt="bg-illustration-produk"
        width={700}
        height={700}
        className="md:hidden absolute bottom-0 left-0 pointer-events-none select-none opacity-90 z-0"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            PRODUK & LAYANAN
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Pilihan yang sesuai kebutuhan finansial Anda
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Konsumen",
              img: "/assets/kantong-belanja.png",
              desc: "Produk kebutuhan sehari-hari bagi anggota dengan harga terjangkau",
            },
            {
              title: "Simpanan",
              img: "/assets/ngasih-duit.png",
              desc: "Produk kebutuhan sehari-hari bagi anggota dengan harga terjangkau",
            },
            {
              title: "Pinjaman",
              img: "/assets/minta-duit.png",
              desc: "Pinjaman berbunga ringan untuk mendukung usaha dan kebutuhan mendesak",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 200}
              className="bg-white shadow-xl rounded-2xl p-10 text-center border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <Image src={item.img} alt={item.title} width={75} height={75} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdukDanLayanan;
