"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Shield, TrendingUp, Cpu, Globe, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    icon: Zap,
    title: "Velocidade Extrema",
    desc: "Sites que carregam em menos de 1 segundo, garantindo que você não perca nenhum cliente.",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    desc: "Protocolos avançados e certificados SSL inclusos para proteger os dados dos seus clientes.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Foco em Conversão",
    desc: "Cada pixel planejado para guiar o visitante até o botão de compra ou contato no WhatsApp.",
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: Cpu,
    title: "Tecnologia de Ponta",
    desc: "Utilizamos Next.js e as tecnologias mais modernas para um desempenho imbatível.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Globe,
    title: "SEO Otimizado",
    desc: "Sua empresa no topo das buscas com estrutura técnica pensada para o Google.",
    color: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
  {
    icon: Heart,
    title: "Suporte Dedicado",
    desc: "Suporte humano e rápido para qualquer dúvida ou ajuste que seu negócio precise.",
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="beneficios" ref={ref} className="py-32 md:py-40 relative overflow-hidden bg-white">
      <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />
      
      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header-center mb-24 text-center"
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-2 rounded-full mb-6 border border-blue-100 uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3" />
            Excelência Técnica
          </span>
          <h2 className="heading-lg text-slate-900">
            Diferenciais que <span className="text-blue-600">geram lucro</span>
          </h2>
          <div className="section-accent-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-6 md:p-10 rounded-2xl md:rounded-3xl bg-slate-50/50 border border-slate-100 hover:shadow-2xl hover:bg-white transition-all duration-300 relative overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl ${b.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                <b.icon className={`w-8 h-8 ${b.iconColor}`} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {b.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {b.desc}
              </p>
              
              <div className="mt-8 flex items-center text-blue-600 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                Saiba Mais
                <Zap className="ml-2 w-4 h-4 fill-current" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Technology Image - Optimized Designer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 relative rounded-3xl md:rounded-3xl overflow-hidden shadow-3xl group"
        >
          <div className="aspect-square sm:aspect-[16/7] md:aspect-[21/7] relative overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                fill
                src="/smiling-hacker.jpg" 
                alt="Advanced Technology" 
                className="object-cover object-[center_15%] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            {/* Elegant Gradient Overlay — left-heavy gradient to protect the face on the right */}
            <div className="absolute inset-0 bg-gradient-to-l from-slate-950 via-slate-900/30 to-transparent" />
            
            {/* Content pushed to the right */}
            <div className="absolute inset-0 flex flex-col justify-center items-end px-6 md:px-16">
              <div className="w-full sm:w-auto sm:max-w-md md:max-w-lg space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-[0.2em] w-fit"
                >
                  Engineered for Performance
                </motion.div>
                <h3 className="text-2xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                  Engenharia de <br /> <span className="text-blue-400">alta performance</span>
                </h3>
                <p className="text-slate-200 text-sm md:text-lg font-medium leading-relaxed">
                  Construímos infraestruturas digitais sólidas que suportam o crescimento acelerado do seu faturamento.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white font-bold text-xs md:text-sm">
                    100% Next.js
                  </div>
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white font-bold text-xs md:text-sm">
                    SEO-First Architecture
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
