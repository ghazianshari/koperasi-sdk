import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse md:flex-row gap-3 justify-between items-center bg-white sm:px-12 py-3 md:py-6 border-t">
      <p className="text-xs text-gray-600">
        © 2022 PT. Bisabanget Teknologi. All Rights Reserved
      </p>

      <div className="md:mt-0">
        <Image
          src="/assets/logo-utama.png" // ganti sesuai nama file logo footer kamu
          alt="logo-utama-footer"
          width={120}
          height={40}
          className="object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
