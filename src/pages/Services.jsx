import { FaCode, FaSearch, FaShieldAlt, FaCloud, FaMobile, FaDatabase, FaCogs, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Desarrollo de Software a Medida',
      description: 'Creamos aplicaciones web y móviles personalizadas utilizando las últimas tecnologías como React, Node.js, Python y más.',
      features: ['Aplicaciones Web', 'APIs REST', 'Arquitectura Microservicios', 'Integración de Sistemas']
    },
    {
      icon: FaSearch,
      title: 'Consultoría Tecnológica',
      description: 'Analizamos tu infraestructura actual y te ayudamos a definir la mejor estrategia tecnológica para tu negocio.',
      features: ['Análisis de Arquitectura', 'Evaluación de Tecnologías', 'Roadmap Tecnológico', 'Optimización de Procesos']
    },
    {
      icon: FaShieldAlt,
      title: 'Auditoría de Código y Seguridad',
      description: 'Revisamos tu código existente para identificar vulnerabilidades, mejorar el rendimiento y asegurar las mejores prácticas.',
      features: ['Code Review', 'Análisis de Seguridad', 'Testing Automatizado', 'Documentación Técnica']
    },
    {
      icon: FaCloud,
      title: 'Migración a la Nube',
      description: 'Te ayudamos a migrar tus aplicaciones y datos a plataformas cloud como AWS, Azure o Google Cloud.',
      features: ['Migración de Datos', 'Configuración Cloud', 'DevOps y CI/CD', 'Monitoreo y Alertas']
    },
    {
      icon: FaMobile,
      title: 'Desarrollo de Apps Móviles',
      description: 'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android que conectan con tus usuarios.',
      features: ['Apps Nativas', 'React Native', 'UI/UX Design', 'Integración de APIs']
    },
    {
      icon: FaDatabase,
      title: 'Gestión de Bases de Datos',
      description: 'Diseñamos, optimizamos y mantenemos bases de datos escalables y eficientes para tu negocio.',
      features: ['Diseño de BD', 'Optimización de Queries', 'Backup y Recovery', 'Data Analytics']
    },
    {
      icon: FaCogs,
      title: 'Automatización de Procesos',
      description: 'Automatizamos tareas repetitivas y procesos empresariales para aumentar la eficiencia operativa.',
      features: ['RPA', 'Workflows', 'Integración de Sistemas', 'Reporting Automático']
    },
    {
      icon: FaChartLine,
      title: 'Business Intelligence',
      description: 'Convertimos tus datos en insights accionables con dashboards interactivos y análisis predictivo.',
      features: ['Dashboards', 'Data Warehousing', 'Machine Learning', 'Reportes Ejecutivos']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios tecnológicos para impulsar tu negocio hacia el éxito digital.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguimos una metodología probada para asegurar el éxito de cada proyecto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Análisis', description: 'Entendemos tus necesidades y objetivos de negocio.' },
              { step: '02', title: 'Planificación', description: 'Diseñamos la estrategia y arquitectura óptima.' },
              { step: '03', title: 'Desarrollo', description: 'Implementamos la solución con las mejores prácticas.' },
              { step: '04', title: 'Entrega', description: 'Desplegamos y brindamos soporte continuo.' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full font-bold text-lg mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;