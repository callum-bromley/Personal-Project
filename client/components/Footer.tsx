import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-2">Phone</h3>
          <p className="text-blue-400">(022) 123 456</p>

          <h3 className="font-bold text-lg mb-2 mt-4">Email</h3>
          <p>
            <a href="mailto:maera@gmail.com" className="text-blue-400 hover:underline">
              maera@gmail.com
            </a>
          </p>
        </div>

        {/* Browse Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Browse</h3>
          <div className="space-y-2 text-sm">
            <a href="/" className="block hover:text-blue-400">Residential Roofing</a>
            <a href="/" className="block hover:text-blue-400">Maintenance</a>
            <a href="/" className="block hover:text-blue-400">Commercial Roofing</a>
            <a href="/" className="block hover:text-blue-400">Other Services</a>
            <a href="/" className="block hover:text-blue-400">Contact</a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold text-lg mb-2">Social</h3>
          <div className="flex space-x-4 mt-4">
            <a href="/" aria-label="Facebook" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="/" aria-label="Google" className="hover:text-blue-400">
              <FaGoogle />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
