import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Award, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

// Import imagini pentru galerie
import Poza1 from '../Poze/Poza1.jpg';
import Poza2 from '../Poze/Poza2.jpg';
import Poza3 from '../Poze/Poza3.jpg';
import Poza4 from '../Poze/Poza4.jpg';
import Poza5 from '../Poze/Poza5.jpg';
import Poza14 from '../Poze/Poza14.jpg';
import Poza15 from '../Poze/Poza15.jpg';
import Poza16 from '../Poze/Poza16.jpg';
import Poza17 from '../Poze/Poza17.jpg';

const galleryImages = [
  {
    src: Poza1,
    alt: 'Montaj Acoperiș Rezidențial de Lux',
    description: 'Montaj acoperiș rezidențial de lux, proiect finalizat cu țiglă metalică de înaltă calitate, integrând un design modern și detalii estetice rafinate.',
  },
  {
    src: Poza2,
    alt: 'Construcție Suport Lemn',
    description: 'Structura din lemn pregătită pentru instalarea acoperișului de înaltă calitate.',
  },
  {
    src: Poza3,
    alt: 'Sistem de Siguranță',
    description: 'Sistem de siguranță instalat pe un acoperiș din țiglă ceramică.',
  },
  {
    src: Poza4,
    alt: 'Montaj Acoperiș Complex',
    description: 'Proiect complex de montaj acoperiș, inclusiv ferestre mansardate.',
  },
  {
    src: Poza5,
    alt: 'Hale Industriale',
    description: 'Montaj acoperiș pentru hale industriale, utilizând materiale rezistente.',
  },
  {
    src: Poza14,
    alt: 'Acoperiș din Panouri Metalice',
    description: 'Proiect executat cu acoperiș din panouri metalice, rezistent și durabil.',
  },
  {
    src: Poza15,
    alt: 'Finisaje Detaliate',
    description: 'Detalii de artizanat pentru structura din lemn a acoperișului.',
  },
  {
    src: Poza16,
    alt: 'Design Modern',
    description: 'Fațadă și acoperiș cu design modern pentru clădiri rezidențiale.',
  },
  {
    src: Poza17,
    alt: 'Renovare Acoperiș',
    description: 'Renovare completă a unui acoperiș clasic din tablă faltuită.',
  },
];


const About = () => {
  const serviceLocations = [
    'Urziceni', 'Cernica', 'Moara Vlăsiei', 'Târgoviște', 'Chitila', 'Balotești', 'Măgurele',
    'Domnești', 'Snagov', 'Clinceni', 'Giurgiu', 'Ilfov', 'Băneasa', 'Pantelimon',
    'Berceni', 'Otopeni', 'Bragadiru', 'București - Sector 1', 'Valea Merilor',
    'București - Sector 2', 'Pitești', 'București - Sector 6', 'Oltenia', 'Ploiești',
  ];

  return (
    <div>
      {/* Meta Tags */}
      <head>
        <title>Despre Noi | Servicii de Montaj Acoperișuri</title>
        <meta
          name="description"
          content="Descoperiți experiența noastră în montaj de acoperișuri. Oferim servicii profesionale în locații precum București, Ilfov, Ploiești și multe altele."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Firma Montaj Acoperișuri",
            "address": serviceLocations.map((location) => ({
              "@type": "PostalAddress",
              "addressLocality": location,
              "addressCountry": "RO",
            })),
            "areaServed": serviceLocations,
            "description": "Servicii profesionale de montaj acoperișuri în diverse locații din România.",
            "telephone": "0742691135",
            "openingHours": "Mo-Fr 08:00-18:00",
            "url": "https://exemplu.ro",
          })}
        </script>
      </head>

      {/* Page Header */}
      <PageHeader
        title="Despre Noi"
        subtitle="Experiență și Profesionalism în Domeniul Acoperișurilor"
        backgroundImage="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80"
      />

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Misiunea Noastră</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ne-am dedicat să oferim servicii de cea mai înaltă calitate în domeniul acoperișurilor,
              punând accent pe durabilitate, eficiență și satisfacția clienților noștri.
              Cu o experiență de peste 15 ani, suntem alegerea de încredere pentru proiectele dvs.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Valorile Noastre</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Integritate', description: 'Onestitate și transparență în toate interacțiunile' },
              { icon: Users, title: 'Echipă', description: 'Profesioniști dedicați și experimentați' },
              { icon: Award, title: 'Calitate', description: 'Standarde înalte în toate proiectele' },
              { icon: Clock, title: 'Punctualitate', description: 'Respectăm termenele stabilite' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Lucrările Noastre</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg shadow-lg bg-white"
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform"
                  />
                </Suspense>
                <div className="p-4">
                  <p className="text-gray-700 text-center">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Unde Oferim Servicii</h2>
          <ul className="text-center text-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceLocations.map((location, index) => (
              <li key={index} className="bg-white p-4 shadow-md rounded-md">{location}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
