import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, ArrowRight, Hammer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import heroImage from '../Poze/slide4.jpg'; // Import imaginea locală pentru fundal
import service1Image from '../Poze/service1.jpg'; // Import imagine locală pentru serviciu 1
import service2Image from '../Poze/service2.jpg'; // Import imagine locală pentru serviciu 2
import service3Image from '../Poze/service3.jpg'; // Import imagine locală pentru serviciu 3

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Hammer,
      title: 'Montaj Acoperișuri',
      description: 'Instalăm acoperișuri noi folosind materiale de cea mai înaltă calitate, adaptate nevoilor și preferințelor dumneavoastră.',
      features: [
        'Acoperișuri țiglă ceramică',
        'Acoperișuri metalice',
        'Sisteme complete de drenaj',
        'Izolație termică',
      ],
      image: service1Image, // Imagine importată
    },
    {
      icon: Wrench,
      title: 'Renovare și Reparații',
      description: 'Oferim servicii complete de renovare și reparații pentru toate tipurile de acoperișuri, prelungind durata lor de viață.',
      features: [
        'Înlocuire țigle deteriorate',
        'Reparații infiltrații',
        'Renovare completă',
        'Întreținere periodică',
      ],
      image: service2Image, // Imagine importată
    },
    {
      icon: Shield,
      title: 'Servicii Specializate',
      description: 'Servicii adaptate pentru nevoi specifice, de la mansardări până la sisteme pluviale complexe.',
      features: [
        'Mansardări',
        'Sisteme pluviale',
        'Ventilație acoperiș',
        'Hidroizolații',
      ],
      image: service3Image, // Imagine importată
    },
  ];

  return (
    <div>
      {/* PageHeader cu imagine locală */}
      <PageHeader
        title="Serviciile Noastre"
        subtitle="Soluții Complete pentru Acoperișul Tău"
        backgroundImage={heroImage} // Imagine locală pentru fundal
      />

      {/* Lista Serviciilor */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={service.image} // Imaginea locală pentru fiecare serviciu
                    alt={service.title}
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <service.icon className="w-12 h-12 text-blue-600" />
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-lg text-gray-600">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <ArrowRight className="text-blue-600" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secțiunea CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pregătit să Începem Proiectul Tău?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru o evaluare gratuită și o ofertă personalizată pentru proiectul tău.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactează-ne Acum <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
