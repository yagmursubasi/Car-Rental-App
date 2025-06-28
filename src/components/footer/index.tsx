import { type FC } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="min-h-[300px] bg-[#1f242b] border-t border-gray-700 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo ve açıklama */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-bold text-white">
            <span className="text-blue-400">Auto</span>Way
          </Link>
          <p className="mt-2 text-gray-400">
            AutoWay, en yeni ve en popüler araçları keşfetmenizi sağlayan bir
            platformdur. Güvenilir ve hızlı hizmet anlayışımızla sizlere en iyi
            deneyimi sunmayı hedefliyoruz.
          </p>
        </div>
        <div>
          {/* Sosyal Medya */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Sayfa Linkleri */}
        <div>
          <h3 className="font-semibold mb-2">Sayfalar</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/cars">Araçlar</Link>
            </li>
            <li>
              <Link to="/about">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/contact">İletişim</Link>
            </li>
          </ul>
        </div>

        {/* Bilgilendirme */}
        <div>
          <h3 className="font-semibold mb-2">Bilgilendirme</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>
              <Link to="/faq">SSS</Link>
            </li>
            <li>
              <Link to="/terms">Kullanım Şartları</Link>
            </li>
            <li>
              <Link to="/privacy">Gizlilik Politikası</Link>
            </li>
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="font-semibold mb-2">İletişim</h3>
          <p className="text-gray-400 text-sm">
            Tel: 0 (0212) xxx xx xx
            <br />
            Email: destek@autoway.com <br />
            İstanbul, Türkiye
          </p>
        </div>
      </div>

      {/* Alt bilgi */}
      <div className="text-center mt-10 text-gray-500 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} AutoWay. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
