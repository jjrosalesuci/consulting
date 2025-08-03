import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const About = () => {
  const team = [
    {
      name: 'Ana García',
      role: 'CEO & Co-fundadora',
      bio: 'Más de 15 años de experiencia en consultoría tecnológica y gestión de proyectos empresariales.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      social: {
        linkedin: 'https://linkedin.com/in/ana-garcia',
        github: 'https://github.com/anagarcia',
        twitter: 'https://twitter.com/anagarcia'
      }
    },
    {
      name: 'Carlos Rodríguez',
      role: 'CTO & Co-fundador',
      bio: 'Arquitecto de software especializado en sistemas distribuidos y tecnologías cloud.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      social: {
        linkedin: 'https://linkedin.com/in/carlos-rodriguez',
        github: 'https://github.com/carlosrodriguez',
        twitter: 'https://twitter.com/carlosrodriguez'
      }
    },
    {
      name: 'María López',
      role: 'Directora de Desarrollo',
      bio: 'Full-stack developer con expertise en React, Node.js y arquitecturas modernas.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      social: {
        linkedin: 'https://linkedin.com/in/maria-lopez',
        github: 'https://github.com/marialopez',
        twitter: 'https://twitter.com/marialopez'
      }
    },
    {
      name: 'Diego Fernández',
      role: 'Lead UX/UI Designer',
      bio: 'Diseñador con pasión por crear experiencias digitales intuitivas y centradas en el usuario.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      social: {
        linkedin: 'https://linkedin.com/in/diego-fernandez',
        github: 'https://github.com/diegofernandez',
        twitter: 'https://twitter.com/diegofernandez'
      }
    }
  ];

  const values = [
    {
      title: 'Innovación',
      description: 'Adoptamos las últimas tecnologías y metodologías para ofrecer soluciones de vanguardia.'
    },
    {
      title: 'Calidad',
      description: 'Nos comprometemos con la excelencia en cada línea de código y cada proyecto entregado.'
    },
    {
      title: 'Transparencia',
      description: 'Mantenemos comunicación abierta y honesta con nuestros clientes en todo momento.'
    },
    {
      title: 'Colaboración',
      description: 'Trabajamos como socios estratégicos para el crecimiento de tu negocio.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nosotros
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Somos un equipo apasionado de profesionales tecnológicos dedicados a transformar 
              ideas en soluciones digitales exitosas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-700 mb-6">
                Empoderar a las empresas mediante la tecnología, creando soluciones digitales 
                innovadoras que impulsen su crecimiento y competitividad en el mercado global.
              </p>
              <p className="text-gray-600">
                Creemos que la tecnología debe ser un catalizador para el éxito empresarial, 
                no una barrera. Por eso, nos enfocamos en desarrollar soluciones que sean 
                escalables, seguras y fáciles de usar.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-700 mb-6">
                Ser la empresa de consultoría tecnológica líder en América Latina, reconocida 
                por nuestra excelencia técnica, innovación constante y compromiso con el éxito 
                de nuestros clientes.
              </p>
              <p className="text-gray-600">
                Aspiramos a ser el socio tecnológico de confianza que las empresas buscan 
                cuando necesitan transformar sus procesos y acelerar su crecimiento digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra cultura empresarial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce a los profesionales que hacen posible cada proyecto exitoso.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestra Historia
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: '2018', event: 'Fundación de TechConsult con un equipo de 4 profesionales.' },
                { year: '2019', event: 'Primer proyecto internacional y expansión del equipo a 12 personas.' },
                { year: '2020', event: 'Adaptación al trabajo remoto y crecimiento del 200% en clientes.' },
                { year: '2021', event: 'Certificaciones en AWS y Azure, especialización en cloud computing.' },
                { year: '2022', event: 'Apertura de oficina en Buenos Aires y equipo de 25 profesionales.' },
                { year: '2023', event: 'Reconocimiento como "Mejor Empresa de Consultoría Tech" en Argentina.' }
              ].map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white text-primary-600 rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  <div className="text-lg text-primary-100">{milestone.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;