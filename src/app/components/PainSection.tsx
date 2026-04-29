"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { XCircle, AlertCircle, TrendingDown, DollarSign, Zap, MousePointer2 } from "lucide-react";

const problems = [
  {
    title: "Invisibilidade Digital",
    desc: "Seu site não aparece no Google e seus clientes acabam fechando com a concorrência.",
    icon: TrendingDown,
  },
  {
    title: "Design que Afasta",
    desc: "Uma primeira impressão amadora destrói a confiança do seu cliente em segundos.",
    icon: XCircle,
  },
  {
    title: "Lentidão Crítica",
    desc: "Sites lentos fazem o visitante desistir antes mesmo de conhecer sua proposta.",
    icon: Zap,
  },
  {
    title: "Zero Conversão",
    desc: "Visitantes entram, mas ninguém clica no WhatsApp ou solicita um orçamento.",
    icon: MousePointer2,
  }
];

export default function PainSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dor" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-red-100 text-red-600 text-[10px] font-black px-4 py-2 rounded-full mb-6 uppercase tracking-[0.2em]">
              ⚠️ Diagnóstico de Perda
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 break-words">
              Seu site hoje traz clientes <br className="hidden md:block" />
              <span className="text-slate-400">ou só ocupa espaço na internet?</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-10">
              Se você se identifica com algum dos problemas ao lado, seu negócio está deixando 
              <span className="text-red-600 font-black"> dinheiro na mesa</span> todos os dias. 
              Um site ineficiente pode custar caro para sua autoridade.
            </p>
            
            <div className="bg-white p-6 rounded-3xl border border-red-100 shadow-xl shadow-red-900/5">
              <div className="flex items-center gap-4 text-red-600 font-black italic">
                <TrendingDown className="w-8 h-8" />
                <div className="text-xl">Fato Comprovado:</div>
              </div>
              <p className="mt-2 text-slate-700 font-medium">
                Sites amadores podem custar até <span className="text-red-600 font-black">R$ 50.000/ano</span> em oportunidades de vendas perdidas.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Problems Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/20 group hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                  <p.icon className="w-6 h-6 text-red-500 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
