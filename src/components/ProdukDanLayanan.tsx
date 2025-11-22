import Image from "next/image";

const ProdukDanLayanan = () => {
  return (
    <section
      id="produk"
      className="scroll-mt-16 sm:scroll-mt-20 flex py-16 px-6 md:px-16 bg-white lg:h-[calc(100vh-71px)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            Produk & Layanan
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg">
            Pilihan yang sesuai kebutuhan finansial Anda
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Konsumen",
              img: "/assets/kantong-belanja.png",
              desc: "Produk kebutuhan sehari-hari bagi anggota dengan harga terjangkau.",
            },
            {
              title: "Simpanan",
              img: "/assets/ngasih-duit.png",
              desc: "Simpanan aman dengan bunga kompetitif serta pengelolaan transparan.",
            },
            {
              title: "Pinjaman",
              img: "/assets/minta-duit.png",
              desc: "Pinjaman berbunga ringan untuk mendukung usaha dan kebutuhan mendesak.",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 200}
              className="border-2 border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <Image src={item.img} alt={item.title} width={80} height={80} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
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
