import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">TechConsult</h3>
            <p className="text-gray-300 mb-4">
              Empresa líder en consultoría tecnológica y desarrollo de software. 
              Transformamos ideas en soluciones digitales innovadoras.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/techconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/techconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/techconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-4 w-4 text-primary-500" />
                <span className="text-gray-300">info@techconsult.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="h-4 w-4 text-primary-500" />
                <span className="text-gray-300">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="h-4 w-4 text-primary-500" />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <div className="space-y-2">
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="/projects" className="block text-gray-300 hover:text-white transition-colors">
                Proyectos
              </a>
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors">
                Nosotros
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} TechConsult S.A. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;