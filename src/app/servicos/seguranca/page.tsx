'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight, FaHardHat, FaShieldAlt, FaUserShield } from 'react-icons/fa';

import PageSection from '../../components/ui/PageSection';
import ImageCarousel from '../../components/ui/ImageCarousel';

export default function ConsultoriaSegurancaPage() {
  const servicosSeguranca = [
    {
      title: 'Programas de Segurança do Trabalho',
      description: 'Elaboração e implementação de programas obrigatórios de segurança e saúde ocupacional.',
      items: [
        'Programa de Gerenciamento de Riscos (PGR)',
        'Programa de Controle Médico de Saúde Ocupacional (PCMSO)',
        'Laudo Técnico das Condições Ambientais de Trabalho (LTCAT)',
        'Perfil Profissiográfico Previdenciário (PPP)',
        'Análise Ergonômica do Trabalho (AET)'
      ]
    },
    {
      title: 'Gestão de Riscos Ocupacionais',
      description: 'Identificação, avaliação e controle de riscos presentes no ambiente de trabalho.',
      items: [
        'Avaliação quantitativa de agentes físicos, químicos e biológicos',
        'Mapeamento de riscos ambientais',
        'Plano de ação para controle de riscos',
        'Monitoramento da exposição ocupacional',
        'Implementação de medidas preventivas e corretivas'
      ]
    },
    {
      title: 'Treinamentos e Capacitações',
      description: 'Desenvolvimento e aplicação de treinamentos em segurança do trabalho conforme exigências legais.',
      items: [
        'Comissão Interna de Prevenção de Acidentes (CIPA)',
        'Brigada de Incêndio',
        'Trabalho em Altura (NR-35)',
        'Espaço Confinado (NR-33)',
        'Primeiros Socorros e uso de EPIs'
      ]
    },
    {
      title: 'Assessoria em Normas Regulamentadoras',
      description: 'Consultoria especializada para adequação às Normas Regulamentadoras do Ministério do Trabalho.',
      items: [
        'Diagnóstico de conformidade com as NRs',
        'Plano de ação para adequação',
        'Acompanhamento de fiscalizações',
        'Atualização contínua sobre mudanças na legislação',
        'Suporte técnico para implementação de requisitos'
      ]
    }
  ];

  const images = [
    { src: '/images/6.jpg', alt: 'Consultoria em Segurança 1' },
    { src: '/images/7.jpg', alt: 'Consultoria em Segurança 2' }
  ];

  return (
    <div>
      <PageSection title="Consultoria em Segurança do Trabalho" titleColor="blue">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Proteção e Bem-estar no Trabalho</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A Ecolution oferece serviços especializados em consultoria em segurança do trabalho para empresas 
              de todos os setores. Nossa equipe de profissionais qualificados trabalha para garantir ambientes 
              de trabalho seguros e saudáveis, em conformidade com a legislação vigente.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Desenvolvemos soluções personalizadas que ajudam sua empresa a prevenir acidentes, reduzir riscos 
              ocupacionais e promover a saúde dos trabalhadores, contribuindo para o aumento da produtividade 
              e a redução de custos relacionados a afastamentos e indenizações.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ImageCarousel images={images} height={400} />
          </motion.div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white">Nossos Serviços em Segurança do Trabalho</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicosSeguranca.map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{servico.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{servico.description}</p>
                <ul className="space-y-2">
                  {servico.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">Vantagens da Consultoria em Segurança do Trabalho</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaHardHat className="text-blue-500 text-3xl" />
              </div>
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Prevenção de Acidentes</h4>
              <p className="text-gray-600 dark:text-gray-300">Redução significativa de acidentes e incidentes no ambiente de trabalho.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaShieldAlt className="text-blue-500 text-3xl" />
              </div>
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Conformidade Legal</h4>
              <p className="text-gray-600 dark:text-gray-300">Adequação às normas e regulamentos de segurança, evitando multas e autuações.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaUserShield className="text-blue-500 text-3xl" />
              </div>
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Cultura de Segurança</h4>
              <p className="text-gray-600 dark:text-gray-300">Desenvolvimento de uma cultura organizacional voltada para a segurança e bem-estar.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contato" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              Solicite um orçamento <FaArrowRight />
            </Link>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
