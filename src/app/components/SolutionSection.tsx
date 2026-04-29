"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Target, Zap, MessageCircle, Search, Sparkles } from "lucide-react";

const solutionBenefits = [
  {
    icon: Target,
    text: "Estratégia antes do design",
    desc: "Mapeamos seu público e concorrentes antes de escrever uma única linha de código.",
    color: "#0077FF",
    bg: "rgba(0,119,255,0.05)"
  },
  {
    icon: Zap,
    text: "Estrutura focada em vendas",
    desc: "Cada seção tem um propósito claro: conduzir o visitante até a conversão desejada.",
    color: "#0077FF",
    bg: "rgba(0,119,255,0.05)"
  },
  {
    icon: MessageCircle,
    text: "Integração com WhatsApp",
    desc: "Botões estratégicos que enviam mensagens pré-prontas para fechar negócios rápidos.",
    color: "#0077FF",
    bg: "rgba(0,119,255,0.05)"
  },
  {
    icon: Search,
    text: "SEO de Alta Autoridade",
    desc: "Títulos e estrutura otimizados para que sua empresa ganhe relevância no Google.",
    color: "#0077FF",
    bg: "rgba(0,119,255,0.05)"
  },
];

export default function SolutionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solucao" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />

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
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-[10px] font-black px-4 py-2 rounded-full mb-6 border border-blue-100 uppercase tracking-[0.2em]"
          >
            <Sparkles className="w-3 h-3" />
            Nossa Proposta
          </motion.span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8 break-words">
            Criamos máquinas de vendas <br className="hidden md:block" />
            <span className="text-blue-600">disfarçadas de sites</span>
          </h2>
          <div className="section-accent-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionBenefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg relative"
                  style={{ backgroundColor: b.bg }}
                >
                  <b.icon className="w-8 h-8 text-blue-600" />
                  <div className="absolute inset-0 rounded-2xl border-2 border-blue-600/10 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {b.text}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {b.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Value Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Zap, label: "Velocidade", value: "99/100" },
            { icon: Target, label: "Conversão", value: "+150%" },
            { icon: CheckCircle, label: "SEO", value: "Ranking" },
            { icon: MessageCircle, label: "Atendimento", value: "Premium" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-slate-50/50 backdrop-blur-md p-6 rounded-3xl border border-slate-100 text-center group hover:bg-blue-600 transition-all duration-500"
            >
              <item.icon className="w-6 h-6 mx-auto mb-3 text-blue-600 group-hover:text-white transition-colors" />
              <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-blue-100">{item.label}</div>
              <div className="text-xl font-black text-slate-900 group-hover:text-white">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
