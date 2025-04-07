'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

import PageSection from '../components/ui/PageSection';

export default function DepoimentosPage() {
  const testimonials = [
    {
      quote: "A Ecolution foi essencial para garantir que nossos processos estivessem de acordo com todas as normas ambientais. O comprometimento e a responsabilidade com o meio ambiente são visíveis em cada projeto que realizam.",
      author: "Lucas Andrade",
      position: "Gerente de Operações",
      rating: 5
    },
    {
      quote: "Graças à consultoria da Ecolution, conseguimos implementar práticas mais sustentáveis em nossa empresa, reduzindo custos e melhorando nossa imagem perante os clientes.",
      author: "Mariana Silva",
      position: "Diretora de Sustentabilidade",
      rating: 5
    },
    {
      quote: "O profissionalismo e conhecimento técnico da equipe da Ecolution nos ajudou a obter todas as licenças ambientais necessárias para nossa operação, de forma rápida e eficiente.",
      author: "Roberto Mendes",
      position: "Diretor Industrial",
      rating: 5
    },
    {
      quote: "A implementação do programa de segurança do trabalho pela Ecolution reduziu significativamente os acidentes em nossa empresa e melhorou o bem-estar dos nossos colaboradores.",
      author: "Carla Rodrigues",
      position: "Gerente de RH",
      rating: 5
    },
    {
      quote: "Contratamos a Ecolution para adequar nossa cozinha industrial às normas sanitárias e o resultado foi excelente. Profissionais competentes e atenciosos.",
      author: "Paulo Ferreira",
      position: "Proprietário de Restaurante",
      rating: 5
    },
    {
      quote: "A consultoria da Ecolution nos ajudou a implementar um sistema de gestão ambiental eficiente, que não só nos colocou em conformidade com a legislação, mas também melhorou nossa eficiência operacional.",
      author: "Fernanda Costa",
      position: "Coordenadora de Meio Ambiente",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar
        key={i}
        className={i < rating ? "text-yellow-500" : "text-gray-300 dark:text-gray-600"}
      />
    ));
  };

  return (
    <div>
      <PageSection title="Depoimentos de Clientes" titleColor="green">
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Veja o que nossos clientes têm a dizer sobre nossos serviços de consultoria ambiental,
          segurança do trabalho e alimentos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="mb-4 text-gray-700 dark:text-gray-300 italic flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <footer className="mt-auto">
                  <p className="font-semibold text-gray-800 dark:text-white">{testimonial.author}</p>
                  {testimonial.position && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.position}</p>
                  )}
                </footer>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Quer compartilhar sua experiência com a Ecolution?
          </p>
          <Link
            href="/contato"
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors"
          >
            Envie seu depoimento
          </Link>
        </div>
      </PageSection>
    </div>
  );
}
