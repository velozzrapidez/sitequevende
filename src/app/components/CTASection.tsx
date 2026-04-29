"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle, Zap, Shield, TrendingUp } from "lucide-react";

const WHATSAPP_NUMBER = "5564999950730";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre a criação de um site para o meu negócio."
);

function scrollToForm() {
  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
}

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="cta-final"
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0077FF 0%, #0055CC 50%, #003DA8 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "rgba(255,255,255,0.05)",
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container-xl text-center flex flex-col items-center gap-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold"
        >
          <Zap className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          Última chance deste mês
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Pronto para transformar seu site em uma{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                máquina de clientes?
              </span>
            </span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-100 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          Cada dia sem um site que vende é{" "}
          <strong className="text-white">dinheiro deixado na mesa</strong>. Não espere mais — comece hoje e receba clientes ainda essa semana.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-4"
        >
          <motion.button
            id="final-cta-primary"
            onClick={scrollToForm}
            className="group relative px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Quero meu site agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.a
            id="final-whatsapp-btn"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 border-2 border-white/40 text-white backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Falar no WhatsApp
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8"
        >
          <div className="flex items-center gap-2 text-blue-100 text-sm">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="text-left">
              <div className="font-bold">Entrega rápida</div>
              <div className="text-xs text-blue-200">5 dias úteis</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-blue-100 text-sm">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-left">
              <div className="font-bold">Sem riscos</div>
              <div className="text-xs text-blue-200">Preço fechado</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-blue-100 text-sm">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-left">
              <div className="font-bold">Resultado</div>
              <div className="text-xs text-blue-200">+150% conversão</div>
            </div>
          </div>
        </motion.div>

        {/* Final urgency */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 flex items-center gap-2 text-blue-200 text-xs"
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-red-500"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
          <span>Últimas 3 vagas disponíveis este mês</span>
        </motion.div>
      </div>
    </section>
  );
}
