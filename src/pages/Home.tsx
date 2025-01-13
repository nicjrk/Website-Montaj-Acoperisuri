import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

// Imagini locale pentru sectiunea Servicii
import montajImage from '../Poze/Poza3.jpg';
import renovareImage from '../Poze/Poza4.jpg';
import reparatiiImage from '../Poze/Poza10.jpg';
import heroImage from '../Poze/slide4.jpg';

const Home = () => {
  const services = [
    {
      title: 'Montaj Acoperisuri',
      description: 'Instalare profesionala de acoperisuri noi cu materiale premium.',
      image: montajImage,
    },
    {
      title: 'Renovare',
      description: 'Renovam si modernizam acoperisuri existente pentru o durata de viata extinsa.',
      image: renovareImage,
    },
    {
      title: 'Reparatii',
      description: 'Servicii rapide si eficiente de reparatii pentru orice tip de acoperis.',
      image: reparatiiImage,
    },
  ];

  const advantages = [
    'Experienta vasta in domeniu',
    'Materiale premium garantate',
    'Echipa profesionista',
    'Garantie extinsa pentru lucrari',
    'Nu percepem avans la incheierea contractului',
    'Avansul se percepe doar cand materialele necesare sunt la locatia dumneavoastra si s-a demarat lucrarea',
    'Lucrarea incepe doar dupa ce verificati materialele',
    'Seriozitate si transparenta in executie',
  ];

  return (
    <div className="pt-16">
      {/* SEO Meta Tags */}
      <head>
        <title>Montaj Acoperisuri in Bucuresti, Ilfov, Giurgiu - Smart Roof Constantin</title>
        <meta
          name="description"
          content="Smart Roof Constantin ofera servicii profesionale de montaj acoperisuri, reparatii si renovari in Bucuresti, Ilfov, Giurgiu, Pitesti, Targoviste, Ploiesti si alte localitati. Contactati-ne pentru servicii de calitate."
        />
        <meta
          name="keywords"
          content="montaj acoperisuri Bucuresti, reparatii acoperisuri Ilfov, renovare acoperisuri Giurgiu, montaj acoperisuri Pitesti, reparatii acoperisuri Targoviste, acoperisuri Ploiesti, servicii acoperisuri"
        />
        <meta property="og:title" content="Montaj Acoperisuri in Bucuresti, Ilfov, Giurgiu - Smart Roof Constantin" />
        <meta property="og:description" content="Servicii profesionale de montaj, renovare si reparatii acoperisuri in Bucuresti si alte localitati din sudul Romaniei." />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://smartroofconstantin.ro" />
      </head>

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
            Montaj Acoperisuri in Bucuresti si Imprejurimi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Cauti o firma serioasa care se ocupa cu montaj si reparatii acoperisuri in Bucuresti, Ilfov sau alte localitati?
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
              Hai sa colaboram! <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Serviciile Noastre de Montaj si Reparatii Acoperisuri
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
                    Afla mai multe <ArrowRight className="ml-2" size={16} />
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
            De Ce Sa Ne Alegi pentru Montaj si Reparatii Acoperisuri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center space-x-4"
              >
                <CheckCircle className="flex-shrink-0 text-green-400" />
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
            Pregatit sa Incepem?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Solicitati o Oferta<ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
