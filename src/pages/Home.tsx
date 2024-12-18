import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

// Imagini locale pentru secțiunea Servicii
import montajImage from '../Poze/Poza3.jpg';
import renovareImage from '../Poze/Poza4.jpg';
import reparatiiImage from '../Poze/Poza10.jpg';
import heroImage from '../Poze/slide4.jpg';

const Home = () => {
  const services = [
    {
      title: 'Montaj Acoperișuri',
      description: 'Instalare profesională de acoperișuri noi cu materiale premium.',
      image: montajImage, // Imagine locală pentru Montaj
    },
    {
      title: 'Renovare',
      description: 'Renovăm și modernizăm acoperișuri existente pentru o durată de viață extinsă.',
      image: renovareImage, // Imagine locală pentru Renovare
    },
    {
      title: 'Reparații',
      description: 'Servicii rapide și eficiente de reparații pentru orice tip de acoperiș.',
      image: reparatiiImage, // Imagine locală pentru Reparații
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Montaj, Renovare, Reparație
            <br />
            Pentru Acoperișuri De Orice Fel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Cauți o firmă serioasă care se ocupă cu acoperișuri?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Hai să colaborăm! <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Serviciile Noastre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Află mai multe <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            De Ce Să Ne Alegi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    'Experiență vastă în domeniu',
    'Materiale premium garantate',
    'Echipă profesionistă',
    'Garanție extinsă pentru lucrări',
    'Nu percepem avans la încheierea contractului',
    'Avansul se percepe doar când materialele necesare sunt la locația dumneavoastra și s-a demarat lucrarea',
    'Lucrarea începe doar după ce verificați materialele',
    'Seriozitate și transparență în execuție',
  ].map((advantage, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex items-center space-x-4"
    >
      <CheckCircle className="flex-shrink-0" />
      <span className="text-lg">{advantage}</span>
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pregătit să Începem?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Solicită o Ofertă<ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
