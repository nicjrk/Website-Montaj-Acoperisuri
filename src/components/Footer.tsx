import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleCall = () => {
    const confirmCall = window.confirm(
      "Doriți să sunați la SMART ROOF CONSTANTIN?\nNumăr: +40 (742) 691 135"
    );
    if (confirmCall) {
      window.location.href = "tel:+40742691135";
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">SMART ROOF CONSTANTIN</h3>
            <p className="text-gray-400">
              Experți în montaj, renovare și reparații acoperișuri de orice fel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={20} className="text-blue-400" />
                <button
                  onClick={handleCall}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +40 742 691 135
                </button>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle size={20} className="text-green-400" />
                <a
                  href="https://wa.me/40742691135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SMART ROOF CONSTANTIN. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
