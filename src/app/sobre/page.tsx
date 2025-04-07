'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLeaf, FaHandshake, FaLightbulb, FaBalanceScale } from 'react-icons/fa';

import PageSection from '../components/ui/PageSection';

export default function SobrePage() {
  const valores = [
    {
      icon: <FaLeaf className="text-green-600 text-3xl" />,
      title: 'Sustentabilidade',
      description: 'Comprometimento com práticas ambientalmente responsáveis e soluções que promovam o desenvolvimento sustentável.'
    },
    {
      icon: <FaHandshake className="text-green-600 text-3xl" />,
      title: 'Responsabilidade',
      description: 'Assumimos compromissos com seriedade e dedicação, garantindo resultados de qualidade para nossos clientes.'
    },
    {
      icon: <FaLightbulb className="text-green-600 text-3xl" />,
      title: 'Inovação',
      description: 'Buscamos constantemente novas abordagens e tecnologias para oferecer soluções eficientes e atualizadas.'
    },
    {
      icon: <FaBalanceScale className="text-green-600 text-3xl" />,
      title: 'Ética',
      description: 'Atuamos com transparência, honestidade e respeito em todas as nossas relações profissionais.'
    }
  ];

  return (
    <div>
      <PageSection title="Nossa História" titleColor="blue">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Quem Somos</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A Ecolution Engenharia nasceu da visão de profissionais comprometidos com a sustentabilidade e a segurança. 
              Fundada por Diego Ewerton, engenheiro ambiental e sanitarista, a empresa tem como missão oferecer soluções 
              integradas que conciliam desenvolvimento econômico, responsabilidade ambiental e bem-estar social.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Guiada pelos valores de responsabilidade, inovação e ética, a Ecolution se destaca pela abordagem personalizada 
              e pelo compromisso com soluções sustentáveis e eficazes para os desafios dos seus clientes. Ao longo dos anos, 
              a Ecolution se consolidou no mercado como uma referência em engenharia ambiental e segurança do trabalho, 
              contribuindo para a criação de um futuro mais seguro e ecologicamente equilibrado.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image 
              src="/images/diego-ewerton.jpg" 
              alt="Diego Ewerton" 
              width={400} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">Nossa Missão</h3>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Oferecer soluções integradas em engenharia ambiental e segurança do trabalho que promovam 
            o desenvolvimento sustentável, a proteção do meio ambiente e o bem-estar das pessoas, 
            contribuindo para o sucesso dos nossos clientes e para a construção de um futuro melhor.
          </p>
        </motion.div>

        <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 rounded-lg">
          <h3 className="text-2xl font-semibold mb-10 text-center text-gray-800 dark:text-white">Nossos Valores</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  {valor.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{valor.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{valor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </PageSection>
    </div>
  );
}
