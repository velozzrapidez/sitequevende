"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, MessageCircle, Zap, ShieldCheck, Gift, Star, Sparkles } from "lucide-react";

const WHATSAPP_NUMBER = "5564999950730";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre a criação de um site para o meu negócio."
);

const highlights = [
  { text: "Página de Alta Conversão", icon: Zap },
  { text: "WhatsApp Nativo", icon: MessageCircle },
  { text: "Design Exclusivo", icon: Sparkles },
  { text: "Entrega em 5 Dias", icon: Zap },
];

export default function OfferSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="oferta" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-white">
      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-blue-100 text-blue-700 text-[10px] font-black px-4 py-2 rounded-full mb-6 uppercase tracking-[0.2em]">
              💎 Oferta Irrecusável
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tighter mb-8 break-words">
              Pacote Completo: <br /> <span className="text-blue-600">Site que Vende</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-10">
              Não vendemos apenas código. Entregamos uma estrutura comercial completa, 
              validada e pronta para capturar leads no primeiro dia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                    <h.icon className="w-5 h-5" />
                  </div>
                  <span className="font-black text-slate-900 text-sm tracking-tight">{h.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 md:p-6 rounded-3xl bg-amber-50 border border-amber-100 flex items-start sm:items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-500 flex items-center justify-center text-white shrink-0">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <p className="text-amber-900 font-black text-sm uppercase tracking-widest">Bônus Exclusivo</p>
                <p className="text-amber-800 text-sm font-medium italic">Configuração do Google Meu Negócio inclusa (Economize R$ 297)</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Pricing/CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-[3.5rem] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative bg-slate-900 rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-6 md:p-8">
                <Star className="w-12 h-12 text-blue-500 opacity-20" />
              </div>

              <div className="mb-10">
                <h3 className="text-white text-xl sm:text-2xl font-black mb-2 break-words">Investimento Único</h3>
                <p className="text-slate-400 font-medium text-sm sm:text-base">Design Premium + Engenharia de Vendas</p>
              </div>

              <div className="mb-10">
                <div className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mb-2">A partir de</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter break-words">Sob consulta</span>
                </div>
                <p className="text-blue-400 font-bold mt-4 text-sm sm:text-base">Personalizado para o seu nicho</p>
              </div>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full py-5 rounded-2xl bg-blue-600 text-white font-black text-lg shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3 hover:bg-blue-500 transition-all"
                >
                  Quero Garantir Meu Site
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  className="w-full py-5 rounded-2xl bg-white/5 text-white font-black text-lg border border-white/10 flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </motion.a>
              </div>

              <div className="mt-8 flex justify-center gap-6 border-t border-slate-800 pt-8">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  Garantia 100%
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest">
                  <Zap className="w-4 h-4 text-blue-500" />
                  Entrega Ágil
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
