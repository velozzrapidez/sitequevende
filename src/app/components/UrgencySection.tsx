"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, Sparkles, TrendingUp } from "lucide-react";

export default function UrgencySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="urgencia" ref={ref} className="py-32 md:py-40 relative overflow-hidden bg-white">
      <div className="container-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-slate-900 rounded-3xl md:rounded-3xl overflow-hidden border border-slate-800"
          style={{ boxShadow: "0 40px 120px rgba(0,0,0,0.35)" }}
        >
          {/* Background blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          <div className="p-6 md:p-16 lg:p-24 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 text-[10px] font-black px-5 py-2.5 rounded-full mb-8 uppercase tracking-[0.3em] border border-red-600/30"
              >
                <Clock className="w-3.5 h-3.5" />
                Oportunidade Escassa
              </motion.span>

              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-8 max-w-4xl mx-auto">
                Vagas Limitadas para{" "}
                <span className="text-red-500">Novos Projetos</span>{" "}
                este Mês
              </h2>

              <p className="text-slate-300 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                Para manter nosso padrão de{" "}
                <span className="text-white font-black italic">excelência e entrega recorde</span>, 
                aceitamos apenas um número restrito de novos parceiros por mês.
              </p>
            </div>

            {/* Main Content: Progress + Features + CTA */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
              {/* Status Card */}
              <div className="md:col-span-2 bg-white/5 backdrop-blur-xl p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div className="min-w-0">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Status do Mês</p>
                    <p className="text-white font-black text-xl md:text-2xl leading-tight">70% das Vagas Preenchidas</p>
                  </div>
                  <div className="bg-red-500/20 border border-red-500/30 rounded-2xl px-5 py-3 shrink-0">
                    <p className="text-red-400 font-black text-[10px] uppercase tracking-widest mb-0.5">Disponíveis</p>
                    <p className="text-white font-black text-3xl leading-none">3/10</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-5 w-full bg-slate-800 rounded-full overflow-hidden flex gap-1.5 p-1.5">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      className={`flex-1 rounded-full origin-left ${i < 7 ? "bg-red-500" : "bg-slate-700"}`}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <span>0</span>
                  <span className="text-red-500">← 3 Restantes →</span>
                  <span>10</span>
                </div>
              </div>

              {/* Info Cards */}
              <div className="flex flex-col gap-4">
                <div className="flex-1 bg-white/5 backdrop-blur-xl p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-600/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-slate-300 text-sm font-medium leading-snug">Fila de espera ativa após fechamento</p>
                </div>
                <div className="flex-1 bg-white/5 backdrop-blur-xl p-6 rounded-[1.5rem] border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-green-600/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-slate-300 text-sm font-medium leading-snug">Novas vagas: próximo ciclo de 30 dias</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToForm}
                className="px-12 py-6 rounded-2xl bg-white text-slate-900 font-black text-xl shadow-2xl flex items-center gap-3 hover:bg-slate-100 transition-all"
              >
                Garantir Minha Vaga
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <p className="text-slate-500 text-sm font-medium">
                ⚡ Resposta em até 2 horas úteis
              </p>
            </div>
          </div>

          {/* Bottom accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
