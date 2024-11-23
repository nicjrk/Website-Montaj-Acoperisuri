import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Award, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About = () => {
  const teamMembers = [
    {
      name: 'Angajat 1',
      role: 'Rol 1',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'Angajat 2',
      role: 'Rol 2',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'Angajat 3',
      role: 'Rol 3',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    },
  ];

  return (
    <div>
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

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Echipa Noastră</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;