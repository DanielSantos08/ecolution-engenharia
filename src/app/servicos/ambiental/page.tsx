'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

import PageSection from '../../components/ui/PageSection';
import ImageCarousel from '../../components/ui/ImageCarousel';

export default function ConsultoriaAmbientalPage() {
  const servicosAmbientais = [
    {
      title: 'Licenciamento Ambiental',
      description: 'Assessoria completa em processos de licenciamento ambiental, desde a fase prévia até a licença de operação.',
      items: [
        'Licença Prévia (LP)',
        'Licença de Instalação (LI)',
        'Licença de Operação (LO)',
        'Renovação de licenças',
        'Acompanhamento junto aos órgãos ambientais'
      ]
    },
    {
      title: 'Estudos Ambientais',
      description: 'Elaboração de estudos técnicos para avaliação de impactos ambientais e definição de medidas mitigadoras.',
      items: [
        'Estudo de Impacto Ambiental (EIA/RIMA)',
        'Relatório Ambiental Simplificado (RAS)',
        'Plano de Controle Ambiental (PCA)',
        'Relatório de Controle Ambiental (RCA)',
        'Plano de Recuperação de Áreas Degradadas (PRAD)'
      ]
    },
    {
      title: 'Gestão de Resíduos',
      description: 'Desenvolvimento e implementação de planos de gerenciamento de resíduos sólidos em conformidade com a legislação.',
      items: [
        'Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
        'Inventário de resíduos',
        'Logística reversa',
        'Treinamento de equipes',
        'Auditoria de conformidade'
      ]
    },
    {
      title: 'Recursos Hídricos',
      description: 'Consultoria em gestão de recursos hídricos, outorgas e monitoramento da qualidade da água.',
      items: [
        'Outorga de direito de uso da água',
        'Monitoramento de efluentes',
        'Plano de recursos hídricos',
        'Estudos hidrológicos',
        'Sistemas de tratamento de água e efluentes'
      ]
    }
  ];

  const images = [
    { src: '/images/1.jpg', alt: 'Consultoria Ambiental 1' },
    { src: '/images/2.jpg', alt: 'Consultoria Ambiental 2' },
    { src: '/images/8.jpg', alt: 'Consultoria Ambiental 3' },
    { src: '/images/9.jpg', alt: 'Consultoria Ambiental 4' }
  ];

  return (
    <div>
      <PageSection title="Consultoria Ambiental" titleColor="green">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Soluções Ambientais Completas</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A Ecolution oferece serviços especializados em consultoria ambiental para empresas de todos os portes e segmentos. 
              Nossa equipe de profissionais qualificados trabalha para garantir que sua empresa esteja em conformidade com a 
              legislação ambiental vigente, otimizando processos e promovendo a sustentabilidade.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Desenvolvemos soluções personalizadas que atendem às necessidades específicas de cada cliente, 
              conciliando desenvolvimento econômico e responsabilidade ambiental. Nosso objetivo é transformar 
              desafios ambientais em oportunidades de melhoria e diferencial competitivo para o seu negócio.
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
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800 dark:text-white">Nossos Serviços Ambientais</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicosAmbientais.map((servico, index) => (
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
                      <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">Por que escolher a Ecolution?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Expertise Técnica</h4>
              <p className="text-gray-600 dark:text-gray-300">Equipe de profissionais altamente qualificados e experientes.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Soluções Personalizadas</h4>
              <p className="text-gray-600 dark:text-gray-300">Atendimento às necessidades específicas de cada cliente.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Compromisso com Resultados</h4>
              <p className="text-gray-600 dark:text-gray-300">Foco na eficiência e na entrega de valor para o cliente.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contato" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
            >
              Solicite um orçamento <FaArrowRight />
            </Link>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
