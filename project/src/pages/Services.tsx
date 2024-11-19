import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Shield, ArrowRight, Hammer } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Services = () => {
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
      image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=800',
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
      image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=800',
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
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Serviciile Noastre"
        subtitle="Soluții Complete pentru Acoperișul Tău"
        backgroundImage="https://images.unsplash.com/photo-1632763247220-3735b0653236?auto=format&fit=crop&q=80"
      />

      {/* Services List */}
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
                    src={service.image}
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

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pregătit să Începem Proiectul Tău?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru o evaluare gratuită și o ofertă personalizată pentru proiectul tău.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactează-ne Acum <ArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;