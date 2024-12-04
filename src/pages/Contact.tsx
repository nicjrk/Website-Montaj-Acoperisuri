import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader2';
import Poza3 from '../Poze/Poza3.jpg';
const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Locație',
      content: 'Strada General Nicolae C. Dona 1, București 030167, România',
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+40 742 691 135',
      link: 'tel:+40742691135', // Link pentru apel
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'smartroofconstantin.75@gmail.com',
      link: 'mailto:smartroofconstantin.75@gmail.com', // Link pentru e-mail
    },
    {
      icon: Clock,
      title: 'Program',
      content: 'Luni - Vineri: 08:00 - 18:00',
    },
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/40742691135', '_blank'); // Link pentru WhatsApp
  };

  return (
    <div>
      <PageHeader
        title="Soluții Complete pentru Acoperișuri"
        subtitle="Calitate și Siguranță pentru Acoperișul Tău"
        src={Poza3}
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
                    className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4"
                  >
                    <info.icon className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 hover:text-blue-600 transition">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 cursor-pointer hover:bg-green-50 transition"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                  <p className="text-gray-600">Trimite-ne un mesaj pe WhatsApp!</p>
                </div>
              </motion.div>
            </div>

            {/* Google Maps Embed */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Locația Noastră</h2>
              <div className="bg-gray-200 h-[300px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Locația Smart Roof"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.865598683478!2d26.101924915318186!3d44.43289997910127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff9f6bdf5a73%3A0x9b48f9c402f21a5a!2sStrada%20General%20Nicolae%20C.%20Dona%201%2C%20Bucure%C8%99ti%20030167%2C%20Rom%C3%A2nia!5e0!3m2!1sen!2sro!4v1698765432109!5m2!1sen!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
