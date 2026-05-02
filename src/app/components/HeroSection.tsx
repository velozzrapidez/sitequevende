"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Star, Users, Clock, Zap, Shield, TrendingUp } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "5564999950730";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre a criação de um site para o meu negócio."
);

function scrollToForm() {
  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
}

function FloatingParticle({ delay, duration, size, startX, opacity }: { delay: number; duration: number; size: number; startX: string; opacity: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: startX,
        background: "linear-gradient(135deg, rgba(0,119,255,0.3) 0%, rgba(0,119,255,0.1) 100%)",
        filter: "blur(1px)",
      }}
      initial={{ y: "110vh", opacity: 0 }}
      animate={{
        y: "-10vh",
        opacity: [0, opacity, 0],
        x: [0, Math.random() * 100 - 50, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

function AnimatedBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider"
      style={{
        background: "linear-gradient(135deg, rgba(0,119,255,0.1) 0%, rgba(0,119,255,0.05) 100%)",
        border: "1px solid rgba(0,119,255,0.2)",
        color: "#0077FF",
      }}
    >
      <Star className="w-3.5 h-3.5 fill-blue-500 text-blue-500 relative z-10" />
      <span className="relative z-10">Páginas de alta conversão em 5 dias</span>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 mesh-gradient" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(0,119,255,0.08) 0%, rgba(59,130,246,0.05) 50%, rgba(0,119,255,0.08) 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particles (desktop only to save performance on mobile) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <FloatingParticle delay={0} duration={15} size={80} startX="10%" opacity={0.15} />
        <FloatingParticle delay={3} duration={18} size={60} startX="30%" opacity={0.1} />
        <FloatingParticle delay={6} duration={20} size={100} startX="50%" opacity={0.12} />
        <FloatingParticle delay={1} duration={16} size={40} startX="70%" opacity={0.15} />
        <FloatingParticle delay={4} duration={14} size={70} startX="85%" opacity={0.1} />
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 container-xl py-28 md:py-32 w-full"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <AnimatedBadge />

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-xl text-gray-900"
            >
              Seu site não pode ser{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  só bonito.
                </span>
                <motion.div
                  className="absolute -bottom-3 left-0 w-full h-3"
                  style={{
                    background: "linear-gradient(90deg, rgba(0,119,255,0.2), rgba(0,119,255,0.4), rgba(0,119,255,0.2))",
                    filter: "blur(4px)",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>{" "}
              Ele precisa vender.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Criamos páginas estratégicas que transformam visitantes em clientes{" "}
              <strong className="text-gray-900">todos os dias</strong>. Design profissional + estrutura de vendas + SEO integrado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.button
                id="hero-cta-primary"
                onClick={scrollToForm}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Quero um site que vende
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </motion.a>
            </motion.div>

            {/* Trust badges — visible on all screens */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-5 text-sm font-medium"
            >
              {[
                { icon: Users, value: "+80", label: "projetos entregues" },
                { icon: Clock, value: "5 dias", label: "entrega rápida" },
                { icon: Zap, value: "SEO", label: "otimizado" },
                { icon: Shield, value: "30 dias", label: "suporte grátis" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-600">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-xs">{item.value}</div>
                    <div className="text-[10px] text-gray-500">{item.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Featured Model Image — VISIBLE ON ALL SCREENS */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="relative w-full max-w-sm mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                fill
                priority
                src="/woman-portrait-with-blue-lights-visual-effects.jpg"
                alt="Tecnologia e Design Premium"
                className="object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/15 backdrop-blur-xl rounded-2xl border border-white/25 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-white text-xs font-black">5.0 Satisfação</span>
                </div>
                <p className="text-white font-black text-sm mt-1">Tecnologia & Design Premium</p>
                <p className="text-white/70 text-[10px] mt-0.5">Páginas de Alta Conversão</p>
              </div>
            </div>

            {/* Floating decorative card — visible on md+ */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm">+150%</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Conversão</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 hidden md:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <p className="font-black text-slate-900 text-sm">5 Dias</p>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Entrega</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest"
      >
        <span>Descubra mais</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-transparent rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
