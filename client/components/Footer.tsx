import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">Phone</h3>
          <p className="text-blue-400">(022) 106 6710</p>

          <h3 className="font-bold text-lg mb-2 mt-6">Email</h3>
          <p>
            <a href="mailto:ihimaerageros111@gmail.com" className="text-blue-400 hover:underline break-words">
              ihimaerageros111@gmail.com
            </a>
          </p>
        </div>

        {/* Browse Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Browse</h3>
          <nav className="space-y-2 text-sm">
            <a href="/services/residential" className="block hover:text-blue-400">Residential Roofing</a>
            <a href="/services/maintenance" className="block hover:text-blue-400">Maintenance</a>
            <a href="/services/commercial" className="block hover:text-blue-400">Commercial Roofing</a>
            <a href="/services/additionalservices" className="block hover:text-blue-400">Other Services</a>
            <a href="/contact" className="block hover:text-blue-400">Contact</a>
          </nav>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold text-lg mb-2">Social</h3>
          <div className="flex space-x-6 mt-4 text-2xl">
            <a href="/" aria-label="Facebook" className="hover:text-blue-400 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              <FaFacebookF />
            </a>
            <a href="/" aria-label="Google" className="hover:text-blue-400 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              <FaGoogle />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
