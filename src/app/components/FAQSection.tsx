"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo demora para meu site ficar pronto?",
    answer: "Nosso prazo padrão é de 5 dias úteis após o envio de todas as informações necessárias (logo, textos base e fotos). Temos um processo otimizado para garantir velocidade sem perder a qualidade.",
  },
  {
    question: "O site terá integração com o WhatsApp?",
    answer: "Sim! Todos os nossos sites vêm com botões flutuantes e chamadas estratégicas que levam o cliente direto para o seu WhatsApp com uma mensagem personalizada.",
  },
  {
    question: "Eu mesmo poderei atualizar o conteúdo do site?",
    answer: "Sim. Entregamos o site com uma estrutura que permite edições simples de textos e imagens. Também oferecemos um treinamento rápido em vídeo para você se sentir seguro.",
  },
  {
    question: "O site já vem otimizado para o Google (SEO)?",
    answer: "Sim. Aplicamos as melhores práticas de SEO técnico, como títulos otimizados, carregamento rápido e estrutura de tags HTML correta para facilitar sua indexação.",
  },
  {
    question: "Quais são os custos de manutenção?",
    answer: "Após a entrega, você terá apenas os custos normais de hospedagem e domínio (que são pagos anualmente ou mensalmente a empresas como HostGator ou Registro.br). Não cobramos taxas mensais obrigatórias.",
  },
];

function AccordionItem({ question, answer, isOpen, onClick, index }: { 
  question: string, 
  answer: string, 
  isOpen: boolean, 
  onClick: () => void,
  index: number
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`border-b border-gray-100 last:border-none overflow-hidden transition-all duration-300 ${isOpen ? 'bg-blue-50/30' : 'bg-transparent'}`}
    >
      <button
        onClick={onClick}
        className="w-full py-6 px-4 md:px-8 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-500'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 md:px-8 pb-8 text-gray-600 leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="py-32 md:py-40 bg-gray-50/30 relative overflow-hidden">
      {/* Decorative dot grid */}
      <div className="absolute top-0 right-0 w-64 h-64 grid-dots opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 grid-dots opacity-10 pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Header Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100/50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <HelpCircle className="w-4 h-4" />
              Dúvidas Frequentes
            </div>
            <h2 className="heading-lg mb-8">
              Tudo o que você precisa <br className="hidden md:block" />
              <span className="text-blue-600">saber para começar</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Separamos as perguntas mais comuns dos nossos clientes para ajudar você a entender como trabalhamos. Ainda tem dúvidas? Nosso WhatsApp está sempre aberto.
            </p>
            
            <div className="card-glass p-6 flex items-center gap-4 border-blue-200/30">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg glow-blue">
                <Plus className="w-6 h-6 rotate-45" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Ainda com dúvidas?</p>
                <p className="text-sm text-gray-500">Chame no chat agora mesmo</p>
              </div>
            </div>
          </motion.div>

          {/* Accordion Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="card-professional bg-white overflow-hidden">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  index={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
