'use client';

import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const redirecionarWhatsApp = () => {
    const numeroWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5571999470541";
    const mensagem = "Olá! Gostaria de saber mais sobre os serviços da Ecolution.";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Ecolution Engenharia</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Inovação sustentável, impacto duradouro.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ecolutionengenharia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/ecolutionengenharia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/depoimentos" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Depoimentos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Contato</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Faça seu orçamento com quem entende!
            </p>
            <button
              onClick={redirecionarWhatsApp}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors"
            >
              <FaWhatsapp size={20} />
              <span>Fale conosco</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Ecolution Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Botão flutuante do WhatsApp */}
      <div
        onClick={redirecionarWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg cursor-pointer z-10 transition-all duration-300 hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp size={28} />
      </div>
    </footer>
  );
};

export default Footer;
