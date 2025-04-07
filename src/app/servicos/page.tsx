'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaLeaf, FaUtensils, FaHardHat } from 'react-icons/fa';

import PageSection from '../components/ui/PageSection';

export default function ServicosPage() {
  const servicos = [
    {
      id: 'ambiental',
      icon: <FaLeaf className="text-green-600 text-4xl mb-4" />,
      title: 'Consultoria Ambiental',
      description: 'Oferecemos soluções completas em gestão ambiental, licenciamento, estudos de impacto e conformidade com a legislação.',
      items: [
        'Licenciamento Ambiental',
        'Estudos de Impacto Ambiental (EIA/RIMA)',
        'Planos de Gerenciamento de Resíduos Sólidos',
        'Gestão de Recursos Hídricos',
        'Auditorias Ambientais',
        'Consultoria em Certificações (ISO 14001)'
      ],
      link: '/servicos/ambiental',
      image: '/images/1.jpg'
    },
    {
      id: 'alimentos',
      icon: <FaUtensils className="text-orange-600 text-4xl mb-4" />,
      title: 'Consultoria em Alimentos',
      description: 'Garantimos a qualidade e segurança dos alimentos através de processos eficientes e conformidade com normas sanitárias.',
      items: [
        'Implementação de Boas Práticas de Fabricação (BPF)',
        'Análise de Perigos e Pontos Críticos de Controle (APPCC)',
        'Adequação à legislação sanitária',
        'Treinamento de manipuladores de alimentos',
        'Consultoria para certificações (ISO 22000)',
        'Desenvolvimento de Manual de Boas Práticas'
      ],
      link: '/servicos/alimentos',
      image: '/images/3.jpg'
    },
    {
      id: 'seguranca',
      icon: <FaHardHat className="text-blue-600 text-4xl mb-4" />,
      title: 'Consultoria em Segurança do Trabalho',
      description: 'Protegemos seus colaboradores e sua empresa com soluções em segurança e saúde ocupacional.',
      items: [
        'Programas de Prevenção de Riscos Ambientais (PPRA)',
        'Programa de Controle Médico de Saúde Ocupacional (PCMSO)',
        'Laudos Técnicos de Condições Ambientais de Trabalho (LTCAT)',
        'Análise Ergonômica do Trabalho',
        'Treinamentos em Segurança do Trabalho',
        'Assessoria em Normas Regulamentadoras (NRs)'
      ],
      link: '/servicos/seguranca',
      image: '/images/6.jpg'
    }
  ];

  return (
    <div>
      <PageSection title="Nossos Serviços" titleColor="green">
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          A Ecolution Engenharia oferece soluções integradas em consultoria ambiental, 
          segurança do trabalho e alimentos, com foco na sustentabilidade e conformidade legal.
        </p>

        <div className="space-y-24">
          {servicos.map((servico, index) => (
            <motion.div 
              key={servico.id}
              id={servico.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                  <div className="flex justify-center md:justify-start">
                    {servico.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center md:text-left">
                    {servico.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {servico.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {servico.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center md:text-left">
                    <Link 
                      href={servico.link}
                      className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition-colors"
                    >
                      Saiba mais
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={servico.image}
                    alt={servico.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
