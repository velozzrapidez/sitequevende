"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Layout, Palette, Rocket, Check, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    desc: "Análise profunda do seu negócio e concorrência para traçar a melhor estratégia.",
    color: "#0077FF",
  },
  {
    number: "02",
    icon: Layout,
    title: "Estrutura",
    desc: "Criação do roteiro de conversão focado em transformar visitantes em leads.",
    color: "#0077FF",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design Premium",
    desc: "Layout moderno e responsivo que transmite autoridade imediata para sua marca.",
    color: "#0077FF",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lançamento",
    desc: "Site no ar com SEO e WhatsApp integrados, pronto para gerar suas primeiras vendas.",
    color: "#0077FF",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 mesh-gradient opacity-5 pointer-events-none" />

      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header-center mb-24 text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-2 rounded-full mb-6 border border-blue-100 uppercase tracking-[0.2em]"
          >
            <Sparkles className="w-3 h-3" />
            Método Validado
          </motion.span>
          <h2 className="heading-lg text-slate-900">
            Seu site pronto <span className="text-blue-600">em tempo recorde</span>
          </h2>
          <div className="section-accent-line mx-auto" />
        </motion.div>

        {/* Optimized Team Process Image - Fix Text Cutoff */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 relative rounded-3xl md:rounded-3xl overflow-hidden shadow-3xl group border-4 border-slate-50"
        >
          <div className="aspect-[4/5] sm:aspect-video md:aspect-[21/7] relative">
            <img 
              src="/team-working-together-project.jpg" 
              alt="Professional Process" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
            />
            {/* Elegant Gradient and Content — card pushed to the right */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent flex flex-col justify-end items-end p-6 md:p-14">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-2xl p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/20 w-full sm:w-auto sm:max-w-lg md:max-w-xl shadow-2xl"
              >
                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase leading-[1.1] tracking-tight break-words">
                  Colaboração <br className="sm:hidden" /> <span className="text-blue-400">Estratégica</span>
                </h3>
                <p className="text-slate-100 text-sm md:text-lg leading-relaxed font-medium">
                  Atuamos como seus parceiros de negócio, refinando cada detalhe para que sua presença online se torne uma máquina de faturamento.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-slate-100" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center group relative z-10"
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-3xl bg-white border-2 border-slate-100 flex items-center justify-center shadow-xl group-hover:border-blue-600 group-hover:rotate-6 transition-all duration-500">
                  <s.icon className="w-10 h-10 text-blue-600" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-lg">
                  {s.number}
                </div>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium px-4">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-8 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-around gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
              <Check className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-black text-slate-900 leading-none mb-1">Prazos Reais</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Entrega em 5 dias</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
              <Rocket className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-black text-slate-900 leading-none mb-1">Alta Performance</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Site otimizado</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
