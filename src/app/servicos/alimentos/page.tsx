'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight, FaUtensils } from 'react-icons/fa';

import PageSection from '../../components/ui/PageSection';
import ImageCarousel from '../../components/ui/ImageCarousel';

export default function ConsultoriaAlimentosPage() {
  const servicosAlimentos = [
    {
      title: 'Boas Práticas de Fabricação (BPF)',
      description: 'Implementação de procedimentos que garantem a qualidade sanitária dos alimentos, desde a produção até a distribuição.',
      items: [
        'Elaboração de Manual de Boas Práticas',
        'Procedimentos Operacionais Padronizados (POPs)',
        'Treinamento de manipuladores',
        'Adequação à legislação sanitária',
        'Auditorias internas'
      ]
    },
    {
      title: 'Análise de Perigos e Pontos Críticos de Controle (APPCC)',
      description: 'Sistema preventivo que identifica, avalia e controla perigos significativos para a segurança dos alimentos.',
      items: [
        'Identificação de perigos potenciais',
        'Determinação de pontos críticos de controle',
        'Estabelecimento de limites críticos',
        'Implementação de sistemas de monitoramento',
        'Ações corretivas e verificação'
      ]
    },
    {
      title: 'Rotulagem de Alimentos',
      description: 'Desenvolvimento e adequação de rótulos de acordo com a legislação vigente, garantindo informações corretas ao consumidor.',
      items: [
        'Informação nutricional obrigatória',
        'Alegações nutricionais e de saúde',
        'Identificação de alergênicos',
        'Adequação à legislação específica',
        'Revisão de rótulos existentes'
      ]
    },
    {
      title: 'Certificações e Normas',
      description: 'Consultoria para obtenção e manutenção de certificações nacionais e internacionais de segurança alimentar.',
      items: [
        'ISO 22000 - Sistema de Gestão de Segurança de Alimentos',
        'FSSC 22000 - Food Safety System Certification',
        'BRC - British Retail Consortium',
        'IFS - International Featured Standards',
        'Preparação para auditorias de certificação'
      ]
    }
  ];

  const images = [
    { src: '/images/3.jpg', alt: 'Consultoria em Alimentos 1' },
    { src: '/images/4.jpg', alt: 'Consultoria em Alimentos 2' },
    { src: '/images/5.jpg', alt: 'Consultoria em Alimentos 3' }
  ];

  return (
    <div className="py-16">
      <PageSection title="Consultoria em Alimentos" titleColor="orange">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Segurança e Qualidade Alimentar
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A Ecolution oferece serviços especializados em consultoria para
              indústrias de alimentos, restaurantes, cozinhas industriais e
              estabelecimentos do setor alimentício. Nossa equipe trabalha para
              garantir a segurança e qualidade dos alimentos, atendendo às
              exigências legais e às expectativas dos consumidores.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Desenvolvemos soluções personalizadas que ajudam sua empresa a
              implementar sistemas eficientes de gestão da segurança alimentar,
              reduzindo riscos, evitando desperdícios e aumentando a confiança
              dos consumidores em seus produtos e serviços.
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
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white">
            Nossos Serviços em Alimentos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicosAlimentos.map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {servico.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {servico.description}
                </p>
                <ul className="space-y-2">
                  {servico.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-600/20 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
            Benefícios da Consultoria em Alimentos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaUtensils className="text-orange-500 text-3xl" />
              </div>
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">
                Conformidade Legal
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Adequação às normas e regulamentos sanitários vigentes, evitando
                multas e penalidades.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaUtensils className="text-orange-500 text-3xl" />
              </div>
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">
                Redução de Riscos
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Minimização de riscos de contaminação e surtos de doenças
                transmitidas por alimentos.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaUtensils className="text-orange-500 text-3xl" />
              </div>
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">
                Diferencial Competitivo
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Melhoria da imagem da empresa e aumento da confiança dos
                consumidores em seus produtos.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              Solicite um orçamento <FaArrowRight />
            </Link>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
