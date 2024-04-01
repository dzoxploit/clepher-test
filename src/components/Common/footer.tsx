const LINKS = ["Home"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          {/* Logo di atas hak cipta dan daftar menu */}
          <div className="flex flex-col items-center justify-center gap-x-4 md:gap-x-8 mb-4">
            {/* Logos */}
            <ul className="flex gap-4 md:gap-8">
              <li className="logo-item">
                <img
                  src="/clepher-logo-black.webp"
                  alt="Clepher"
                  className="w-12 h-auto"
                />
              </li>
            </ul>
          </div>
          {/* End of logos */}
          {/* Links menu */}
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          {/* End of Links menu */}
        </div>
      </div>
      <div className="container mx-auto text-center">
        {/* Tambahkan kelas mx-auto di sini */}
        {/* Hak cipta */}
        <span className="text-gray-700 font-normal mt-2">
          &copy; {CURRENT_YEAR} Made with{" "}
          <a
            href="https://didinnuryahya.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Didin Nur Yahya
          </a>{" "}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
