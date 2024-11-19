import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresă',
      content: 'Strada Principală nr. 123, București',
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+40 123 456 789',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@roofpro.ro',
    },
    {
      icon: Clock,
      title: 'Program',
      content: 'Luni - Vineri: 08:00 - 18:00',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Contact"
        subtitle="Suntem Aici să te Ajutăm"
        backgroundImage="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Informații de Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <info.icon className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="bg-gray-200 h-[300px] rounded-lg">
                {/* Integrate actual map here */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Hartă Google Maps
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Trimite-ne un Mesaj</h2>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;