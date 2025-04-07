'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import PageSection from "./components/ui/PageSection";
import ServiceCard from "./components/ui/ServiceCard";
import TestimonialCard from "./components/ui/TestimonialCard";

export default function Home() {
  // Dados dos serviços
  const services = [
    {
      title: "Consultoria Ambiental",
      description: "Soluções sustentáveis para gestão ambiental, licenciamento e conformidade com a legislação.",
      images: [
        { src: "/images/1.jpg", alt: "Consultoria Ambiental 1" },
        { src: "/images/2.jpg", alt: "Consultoria Ambiental 2" }
      ],
      link: "/servicos/ambiental"
    },
    {
      title: "Consultoria em Alimentos",
      description: "Garantia de qualidade e segurança alimentar para sua empresa, com foco em normas e certificações.",
      images: [
        { src: "/images/3.jpg", alt: "Consultoria em Alimentos 1" },
        { src: "/images/4.jpg", alt: "Consultoria em Alimentos 2" },
        { src: "/images/5.jpg", alt: "Consultoria em Alimentos 3" }
      ],
      link: "/servicos/alimentos"
    },
    {
      title: "Consultoria em Segurança do Trabalho",
      description: "Proteção para seus colaboradores e conformidade com normas de segurança e saúde ocupacional.",
      images: [
        { src: "/images/6.jpg", alt: "Consultoria em Segurança 1" },
        { src: "/images/7.jpg", alt: "Consultoria em Segurança 2" }
      ],
      link: "/servicos/seguranca"
    }
  ];

  // Dados dos depoimentos
  const testimonials = [
    {
      quote: "A Ecolution foi essencial para garantir que nossos processos estivessem de acordo com todas as normas ambientais. O comprometimento e a responsabilidade com o meio ambiente são visíveis em cada projeto que realizam.",
      author: "Lucas Andrade",
      position: "Gerente de Operações"
    },
    {
      quote: "Graças à consultoria da Ecolution, conseguimos implementar práticas mais sustentáveis em nossa empresa, reduzindo custos e melhorando nossa imagem perante os clientes.",
      author: "Mariana Silva",
      position: "Diretora de Sustentabilidade"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/engenhariaambiental.jpg"
            alt="Ecolution Engenharia"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="brightness-[0.7] dark:brightness-[0.5]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ecolution Consultoria Ambiental e Segurança do Trabalho
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Inovação sustentável, impacto duradouro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors text-lg font-medium"
            >
              Fale Conosco <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <PageSection title="Nossos Serviços" id="services" titleColor="green">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              images={service.images}
              link={service.link}
            />
          ))}
        </div>
      </PageSection>

      {/* Sobre */}
      <PageSection title="Nossa História" id="about" className="bg-gray-50 dark:bg-gray-900" titleColor="blue">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
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
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/diego-ewerton.jpg"
              alt="Diego Ewerton"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </PageSection>

      {/* Depoimentos */}
      <PageSection title="O que Nossos Clientes Dizem" id="testimonials" titleColor="green">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
            />
          ))}
        </div>
      </PageSection>
    </>
  );
}
