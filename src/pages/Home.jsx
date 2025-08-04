import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaCogs, FaUsers, FaLightbulb } from 'react-icons/fa';

const Home = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Desarrollo de Software',
      description: 'Creamos soluciones tecnológicas a medida para tu empresa.'
    },
    {
      icon: FaCogs,
      title: 'Consultoría Tecnológica',
      description: 'Te asesoramos en la mejor estrategia tecnológica para tu negocio.'
    },
    {
      icon: FaUsers,
      title: 'Equipo Experto',
      description: 'Contamos con profesionales altamente capacitados y con experiencia.'
    },
    {
      icon: FaLightbulb,
      title: 'Soluciones Innovadoras',
      description: 'Implementamos las últimas tecnologías para optimizar tus procesos.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transformamos Ideas en
              <span className="block text-primary-200">Soluciones Digitales</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Somos una empresa de consultoría tecnológica especializada en desarrollo de software
              y transformación digital para empresas de todos los tamaños.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contáctanos
                <FaArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
              >
                Ver Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir TechConsult?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos experiencia técnica con visión estratégica para impulsar tu negocio hacia el futuro digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Solicitar Consulta Gratuita
            <FaArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;