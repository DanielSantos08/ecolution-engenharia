'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

import PageSection from '../components/ui/PageSection';
import ContactForm from '../components/ui/ContactForm';

export default function ContatoPage() {
  const redirecionarWhatsApp = () => {
    const numeroWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5571999470541";
    const mensagem = "Olá! Gostaria de saber mais sobre os serviços da Ecolution.";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <PageSection title="Entre em Contato" titleColor="green">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
          <div className="pl-8">

            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Informações de Contato</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-green-600 text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Endereço</h4>
                  <p className="text-gray-600 dark:text-gray-300">Salvador, Bahia - Brasil</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaPhone className="text-green-600 text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Telefone</h4>
                  <p className="text-gray-600 dark:text-gray-300">(71) 99947-0541</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-green-600 text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">contato@ecolutionengenharia.com.br</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Redes Sociais</h3>

            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.instagram.com/ecolutionengenharia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl text-pink-600 dark:text-pink-400" />
              </a>

              <a
                href="https://www.linkedin.com/company/ecolutionengenharia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl text-blue-600 dark:text-blue-400" />
              </a>

              <button
                onClick={redirecionarWhatsApp}
                className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-2xl text-green-600 dark:text-green-400" />
              </button>
            </div>
          </div>

            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Horário de Atendimento</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Segunda a Sexta: 8h às 18h</p>
              <p className="text-gray-700 dark:text-gray-300">Sábado: 8h às 12h</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </PageSection>
    </div>
  );
}
