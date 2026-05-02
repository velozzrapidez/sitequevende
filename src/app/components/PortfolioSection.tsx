"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  MousePointer2,
  RefreshCw
} from "lucide-react";

const projects = [
  {
    title: "Sanus Contábil",
    subtitle: "Contabilidade Digital para Empresas",
    description: "Reformulamos a presença digital da Sanus para transmitir confiança e autoridade. Transformamos um site amador e confuso em uma landing page premium focada em conversão de leads qualificados.",
    tags: ["Landing Page Premium", "Design de Autoridade", "Foco em Conversão"],
    imageBefore: "/sanus-before.png",
    imageAfter: "/sanus-after.png",
    results: [
      "Identidade visual modernizada e profissional",
      "Foco estratégico em captura de leads",
      "Experiência do usuário (UX) otimizada",
    ],
    color: "blue"
  },
  {
    title: "Clean Pro Brasil",
    subtitle: "Líder em Produtos de Limpeza Profissional",
    description: "Transformamos uma vitrine digital confusa em uma plataforma de autoridade inquestionável. O resultado? Um aumento imediato na confiança de grandes compradores B2B e licitações.",
    tags: ["Landing Page Premium", "Design Corporativo", "Foco em Conversão"],
    imageBefore: "/CLEANPRO1.jpeg",
    imageAfter: "/CLEANPRO2.jpeg",
    results: [
      "Design 100% focado em autoridade",
      "Integração estratégica de WhatsApp",
      "Arquitetura de informações otimizada",
    ],
    color: "indigo"
  },
  {
    title: "Agendei SaaS",
    subtitle: "Sistema de Agendamento Inteligente",
    description: "Desenvolvemos uma plataforma completa para gestão de agendamentos, focada em simplicidade e eficiência para o usuário final e controle total para o administrador.",
    tags: ["SaaS", "Gestão de Agendamentos", "UX Avançada"],
    imageBefore: "/agendei.PNG", 
    imageAfter: "/agendei.PNG",
    results: [
      "Interface intuitiva e responsiva",
      "Redução de 40% no tempo de marcação",
      "Painel administrativo completo",
    ],
    color: "green"
  },
  {
    title: "Velozz Delivery",
    subtitle: "Plataforma de Logística Ultrarrápida",
    description: "Uma solução robusta para delivery que prioriza a velocidade de processamento e a facilidade de acompanhamento em tempo real para clientes e entregadores.",
    tags: ["App Mobile", "Logística", "Real-time Data"],
    imageBefore: "/velozzdelivery.PNG",
    imageAfter: "/velozzdelivery.PNG",
    results: [
      "Acompanhamento em tempo real",
      "Sistema de rotas otimizadas",
      "Alta escalabilidade e performance",
    ],
    color: "red"
  }
];

// Componente de Badge Rotativo inspirado no Droove
const RotatingBadge = () => {
  return (
    <motion.div 
      className="absolute -top-12 -right-12 w-32 h-32 z-30 hidden lg:block"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-blue-600">
          <textPath xlinkHref="#circlePath">
            • DESIGN PREMIUM • IMPACTO REAL • FOCO EM VENDAS •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-blue-100">
          <RefreshCw className="w-6 h-6 text-blue-600 animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
};

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(slideNext, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slideNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      rotateY: direction > 0 ? 45 : -45,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      rotateY: direction < 0 ? 45 : -45,
      opacity: 0,
      scale: 0.8
    })
  };

  const project = projects[currentIndex];

  return (
    <section id="portfolio" ref={containerRef} className="py-24 md:py-32 bg-slate-50 relative overflow-hidden perspective-1000">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ rotate }}
          className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-100/50 blur-[120px] rounded-full" 
        />
        <motion.div 
          style={{ rotate: -rotate }}
          className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-100/50 blur-[120px] rounded-full" 
        />
      </div>

      <div className="container-xl relative z-10">
        <div className="section-header-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Cases de Sucesso
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg"
          >
            Projetos que geram <span className="text-blue-600">impacto imediato</span>
          </motion.h2>
          <div className="section-accent-line" />
        </div>

        <motion.div 
          style={{ scale }}
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                rotateY: { duration: 0.6 },
                opacity: { duration: 0.4 }
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Content Side */}
              <div className="order-2 lg:order-1 space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white border border-slate-200 text-slate-500 rounded-full shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold">{project.subtitle}</p>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                  {project.description}
                </p>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Resultados Alcançados
                  </h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="btn-primary">
                    Quero um site assim
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Visual Side (Before/After) */}
              <div className="order-1 lg:order-2 relative group perspective-1000">
                <RotatingBadge />
                
                <motion.div 
                  whileHover={{ rotateY: -10, rotateX: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-white transform-gpu"
                >
                  {/* After Image */}
                  <div className="absolute inset-0 bg-slate-200">
                    <Image 
                      fill
                      src={project.imageAfter} 
                      alt="Depois" 
                      className="object-cover"
                    />
                    <div className="absolute top-6 right-6 bg-green-500 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-xl z-20 uppercase tracking-widest flex items-center gap-2">
                      <Zap className="w-3 h-3 fill-white" />
                      Versão Final
                    </div>
                  </div>

                  {/* Before Image (Floating Overlay) - Only show if different from After image */}
                  {project.imageBefore !== project.imageAfter && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                      className="absolute bottom-6 left-6 w-1/2 aspect-video rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-30 group-hover:scale-105 transition-transform duration-500"
                    >
                      <Image 
                        fill
                        src={project.imageBefore} 
                        alt="Antes" 
                        className="object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-slate-900/20" />
                      <div className="absolute top-3 left-3 bg-red-500 text-white text-[8px] font-black px-2 py-1 rounded shadow-lg z-10 uppercase tracking-widest">
                        Design Antigo
                      </div>
                    </motion.div>
                  )}

                  {/* Glassmorphism Badge */}
                  <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md border border-white/30 p-4 rounded-2xl z-20 hidden md:block">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <MousePointer2 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest leading-none mb-1">Impacto Visual</p>
                        <p className="text-white font-black leading-none text-sm">+300% Conversão</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl -z-10 animate-pulse" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentIndex ? "w-12 bg-blue-600" : "w-3 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={slidePrev}
                className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={slideNext}
                className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
