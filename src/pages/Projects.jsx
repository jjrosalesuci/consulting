import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Desarrollo Web',
      client: 'RetailCorp',
      description: 'Plataforma de comercio electrónico completa con gestión de inventario, pagos online y panel administrativo.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: [
        'Aumento del 150% en ventas online',
        'Reducción del 60% en tiempo de procesamiento',
        'Mejora del 40% en experiencia de usuario'
      ]
    },
    {
      id: 2,
      title: 'Sistema de Gestión Hospitalaria',
      category: 'Software a Medida',
      client: 'Hospital San José',
      description: 'Sistema integral para gestión de pacientes, historias clínicas, citas médicas y facturación.',
      technologies: ['Angular', 'Java Spring', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: [
        'Digitalización del 100% de procesos',
        'Reducción del 70% en errores administrativos',
        'Mejora del 50% en tiempos de atención'
      ]
    },
    {
      id: 3,
      title: 'App de Delivery',
      category: 'Aplicación Móvil',
      client: 'FoodExpress',
      description: 'Aplicación móvil para pedidos de comida con seguimiento en tiempo real y sistema de calificaciones.',
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: [
        '50,000+ descargas en 6 meses',
        'Rating promedio de 4.8 estrellas',
        'Aumento del 200% en pedidos online'
      ]
    },
    {
      id: 4,
      title: 'Dashboard de Analytics',
      category: 'Business Intelligence',
      client: 'MarketingPro',
      description: 'Dashboard interactivo para visualización de métricas de marketing digital y análisis de ROI.',
      technologies: ['Vue.js', 'Python', 'Pandas', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: [
        'Automatización del 90% de reportes',
        'Reducción del 80% en tiempo de análisis',
        'Mejora del 35% en toma de decisiones'
      ]
    },
    {
      id: 5,
      title: 'Sistema de Inventario',
      category: 'Automatización',
      client: 'LogisticaPlus',
      description: 'Sistema de gestión de inventario con códigos QR, alertas automáticas y predicción de demanda.',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: [
        'Reducción del 45% en pérdidas de stock',
        'Optimización del 60% en reposición',
        'Ahorro del 30% en costos operativos'
      ]
    },
    {
      id: 6,
      title: 'Plataforma Educativa',
      category: 'E-learning',
      client: 'EduTech Academy',
      description: 'Plataforma de educación online con cursos interactivos, evaluaciones automáticas y certificaciones.',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      results: [
        '10,000+ estudiantes registrados',
        '95% de tasa de finalización',
        'Expansión a 15 países'
      ]
    }
  ];

  const categories = ['Todos', 'Desarrollo Web', 'Software a Medida', 'Aplicación Móvil', 'Business Intelligence', 'Automatización', 'E-learning'];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Casos de Éxito
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a empresas de diferentes sectores a alcanzar sus objetivos tecnológicos.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaExternalLinkAlt className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-primary-600 transition-colors">
                        <FaGithub className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2">Cliente: {project.client}</p>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Resultados:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                          {result}
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

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Resultados que Hablan por Sí Solos
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Proyectos Completados' },
              { number: '98%', label: 'Satisfacción del Cliente' },
              { number: '50+', label: 'Empresas Confiaron en Nosotros' },
              { number: '24/7', label: 'Soporte Técnico' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;