"use client";

import { motion } from "framer-motion";
import { MessageCircle, Share2, Globe, Mail, ChevronRight, Heart } from "lucide-react";

const WHATSAPP_NUMBER = "5564999950730";

const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#dor", label: "Seu Problema" },
  { href: "#solucao", label: "Solução" },
  { href: "#oferta", label: "Oferta" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

const services = [
  "Landing Pages de Alta Conversão",
  "Sites Institucionais",
  "Páginas de Vendas",
  "Otimização SEO",
  "Integração com WhatsApp",
  "Google Meu Negócio",
];

const socialLinks = [
  { icon: Share2, href: "https://www.instagram.com/siteque_vende?igsh=M252bzZhb2N6aDBy", label: "@sitequevende", color: "hover:text-pink-400" },
  { icon: Globe, href: "#", label: "Site que Vende", color: "hover:text-blue-400" },
  { icon: Mail, href: "mailto:contato@sitequevende.com", label: "contato@sitequevende.com", color: "hover:text-blue-400" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600" />

      <div className="container-xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #0077FF 0%, #0055CC 100%)",
                }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                SQ
              </motion.div>
              <span className="font-bold text-white text-xl">Site que Vende</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Transformamos visitantes em clientes. Páginas estratégicas que
              geram resultados reais para o seu negócio.
            </p>

            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre a criação de um site para o meu negócio.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
              style={{ color: "#25D366" }}
              whileHover={{ x: 5 }}
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Falar no WhatsApp
            </motion.a>

            {/* Trust badges */}
            <div className="flex gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
                +80 projetos
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400">
                5★ avaliação
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-blue-500" />
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors" />
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-blue-500" />
              Serviços
            </h4>
            <nav className="flex flex-col gap-2">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  className="text-gray-400 text-sm flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                  {service}
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-blue-500" />
              Redes Sociais
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-gray-400 text-sm transition-colors ${social.color}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contato"
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-white transition-all"
              style={{
                background: "linear-gradient(135deg, #0077FF 0%, #0055CC 100%)",
              }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <MessageCircle className="w-4 h-4" />
              Solicitar Orçamento
            </motion.a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-xs text-center md:text-left">
              <p>© {year} Site que Vende. Todos os direitos reservados.</p>
              <p className="mt-1">Atendendo Itumbiara - GO e todo o Brasil 🇧🇷</p>
            </div>

            <motion.div
              className="flex items-center gap-2 text-gray-500 text-xs"
              whileHover={{ scale: 1.02 }}
            >
              <span>Feito com</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />
              </motion.div>
              <span>para empresas que querem crescer</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
