"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, Quote, TrendingUp, Award, Users, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Fernanda Costa",
    company: "Estúdio Forma",
    text: "Em menos de uma semana já tinha um site profissional. Na segunda semana já recebi 3 novos clientes pelo WhatsApp direto do site!",
    stars: 5,
    initials: "FC",
    color: "#0077FF",
    result: "+3 clientes na 1ª semana"
  },
  {
    name: "Ricardo Alves",
    company: "RC Reformas",
    text: "Antes minha empresa não aparecia no Google. Agora estou na primeira página e meu telefone não para de tocar. Valeu demais!",
    stars: 5,
    initials: "RA",
    color: "#0055CC",
    result: "1ª página do Google"
  },
  {
    name: "Ana Lima",
    company: "Doceria Sweet",
    text: "Parece mágica! O site é lindo, carrega rápido e os clientes ficam impressionados. Minhas vendas no Instagram subiram muito.",
    stars: 5,
    initials: "AL",
    color: "#003DA8",
    result: "+40% vendas Instagram"
  },
  {
    name: "Juliana Mendes",
    company: "Mendes Advocacia",
    text: "A autoridade que o novo site transmite é outro nível. O investimento se pagou logo no primeiro contrato fechado através da página.",
    stars: 5,
    initials: "JM",
    color: "#4F46E5",
    result: "ROI em 15 dias"
  },
  {
    name: "Marcelo Santos",
    company: "Tech Logística",
    text: "O suporte é impecável e a entrega foi exatamente no prazo prometido. Recomendo para qualquer empresa que queira crescer online.",
    stars: 5,
    initials: "MS",
    color: "#2563EB",
    result: "Entrega em 5 dias"
  },
];

const fictionalBrands = [
  "NEXUS TECH",
  "LUMINA DESIGN",
  "VANGUARD SOLUTIONS",
  "AURA WELLNESS",
  "STELLAR LOGISTICS",
  "NOVA CAPITAL",
  "NEXUS TECH",
  "LUMINA DESIGN",
  "VANGUARD SOLUTIONS",
  "AURA WELLNESS",
  "STELLAR LOGISTICS",
  "NOVA CAPITAL"
];

const stats = [
  { value: "+80", label: "Projetos entregues", icon: Award },
  { value: "5 dias", label: "Prazo de entrega", icon: TrendingUp },
  { value: "100%", label: "Satisfação garantida", icon: Star },
  { value: "5★", label: "Avaliação média", icon: Users },
];

function AnimatedCounter({ value, label, icon: Icon, delay }: { value: string; label: string; icon: any; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (inView) {
      const numericValue = value.replace("+", "");
      let current = 0;
      const target = parseInt(numericValue) || 100;
      const increment = target / 20;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current).toString());
        }
      }, 50);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.4, type: "spring" }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="relative group"
    >
      <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-blue-50 transition-all duration-300 group-hover:shadow-2xl group-hover:border-blue-200">
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #E8F3FF 0%, #B3D4FF 100%)" }}
          >
            <Icon className="w-6 h-6" style={{ color: "#0077FF" }} />
          </div>
        </div>
        <motion.div
          className="text-4xl md:text-5xl font-black mb-2"
          style={{
            background: "linear-gradient(135deg, #0077FF 0%, #0055CC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {displayValue}
        </motion.div>
        <div className="text-sm text-gray-600 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}

export default function ProofSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="prova" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 mesh-gradient opacity-10 pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {stats.map((s, i) => (
            <AnimatedCounter key={i} value={s.value} label={s.label} icon={s.icon} delay={i * 0.1} />
          ))}
        </div>

        {/* Header */}
        <div className="section-header-center mb-20 text-center">
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-100 text-blue-700 text-xs font-black px-4 py-2 rounded-full mb-6 uppercase tracking-[0.2em]"
          >
            🔥 Prova Social
          </motion.span>
          <h2 className="heading-lg text-slate-900">
            O que falam sobre <span className="text-blue-600">nossos resultados</span>
          </h2>
          <div className="section-accent-line mx-auto" />
          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            Nossa maior satisfação é ver os resultados reais que ajudamos a construir todos os dias.
          </p>
        </div>

        {/* Rotary Testimonial Carousel (Inspired by Droove) */}
        <div className="relative h-[500px] md:h-[450px] flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-full flex items-center justify-center perspective-1000">
            <AnimatePresence mode="popLayout">
              {[-1, 0, 1].map((offset) => {
                const index = (currentIndex + offset + testimonials.length) % testimonials.length;
                const t = testimonials[index];
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, x: offset * 300, z: -200 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.4, 
                      scale: isActive ? 1 : 0.85, 
                      x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 350),
                      z: isActive ? 0 : -100,
                      filter: isActive ? "blur(0px)" : "blur(4px)",
                      zIndex: isActive ? 20 : 10
                    }}
                    exit={{ opacity: 0, scale: 0.8, x: offset * 300 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100"
                  >
                    <div className="flex flex-col gap-6 h-full">
                      <div className="flex justify-between items-start">
                        <div className="flex gap-1">
                          {[...Array(t.stars)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <div 
                          className="px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${t.color}, #000)` }}
                        >
                          {t.result}
                        </div>
                      </div>

                      <Quote className="w-10 h-10 text-blue-100" />

                      <p className="text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic">
                        "{t.text}"
                      </p>

                      <div className="mt-auto flex items-center gap-4 pt-6 border-t border-slate-100">
                        <div 
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-lg shadow-inner"
                          style={{ backgroundColor: t.color }}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <div className="font-black text-slate-900">{t.name}</div>
                          <div className="text-blue-600 text-sm font-bold">{t.company}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Nav Buttons */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none px-4 md:px-0">
            <button 
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:scale-110 transition-all pointer-events-auto border border-slate-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:scale-110 transition-all pointer-events-auto border border-slate-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Infinite Rotating Company Logos */}
        <div className="mt-32 pt-16 border-t border-slate-200 overflow-hidden relative">
          <p className="text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12">
            Empresas que confiam na nossa tecnologia
          </p>
          
          <div className="flex gap-12 md:gap-24 items-center">
            <motion.div 
              className="flex gap-12 md:gap-24 items-center whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...fictionalBrands, ...fictionalBrands].map((brand, i) => (
                <div
                  key={i}
                  className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter flex items-center gap-3 opacity-20 hover:opacity-100 transition-all duration-300 cursor-default"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  {brand}
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Edge gradients for smoothness */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
