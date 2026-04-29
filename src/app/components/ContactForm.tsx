"use client";

import { useState, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, User, Mail, Phone, Building2, MessageSquare, Target, DollarSign, Zap, Settings, ShieldCheck, CheckCircle } from "lucide-react";
import { insertLead } from "@/app/lib/supabase";
import { useToast } from "@/app/components/Toast";

interface FormState {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  empresa?: string;
  mensagem?: string;
}

const initialState: FormState = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  mensagem: "",
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string): boolean {
  return phone.replace(/\D/g, "").length >= 10;
}

function InputField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  required,
  icon: Icon,
  error,
  success,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  required?: boolean;
  icon: React.ElementType;
  error?: string;
  success?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700 flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
        {success && <CheckCircle className="w-4 h-4 text-green-500" />}
      </label>
      <div className="relative group">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          required={required}
          className={`w-full pl-12 pr-4 py-4 rounded-xl border bg-white text-gray-900 text-base outline-none transition-all duration-300 placeholder:text-gray-400/60 ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
              : success
              ? "border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-100"
              : "border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          }`}
        />
        <Icon className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-all duration-300 z-10 group-focus-within:scale-110 ${
          error ? "text-red-400" : success ? "text-green-500" : "text-gray-400"
        }`} />
        {/* Animated focus ring */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background: error
              ? "linear-gradient(135deg, rgba(239,68,68,0.1), transparent)"
              : success
              ? "linear-gradient(135deg, rgba(34,197,94,0.1), transparent)"
              : "linear-gradient(135deg, rgba(0,119,255,0.05), transparent)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const validateField = (field: keyof FormState, value: string): string | undefined => {
    switch (field) {
      case "email":
        if (!value) return "E-mail é obrigatório";
        if (!validateEmail(value)) return "Digite um e-mail válido";
        break;
      case "telefone":
        if (!value) return "WhatsApp é obrigatório";
        if (!validatePhone(value)) return "Digite um número válido";
        break;
      case "nome":
        if (!value) return "Nome é obrigatório";
        if (value.length < 3) return "Nome deve ter pelo menos 3 letras";
        break;
    }
    return undefined;
  };

  const setField = useCallback(
    (field: keyof FormState) => (value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      if (touched[field]) {
        const error = validateField(field, value);
        setErrors((prev) => ({ ...prev, [field]: error }));
      }
    },
    [touched]
  );

  const handleBlur = (field: keyof FormState) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      const error = validateField(key as keyof FormState, value);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(form).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      toast.error("Por favor, corrija os campos destacados.");
      return;
    }

    setLoading(true);

    const { success, error } = await insertLead({
      nome: form.nome,
      email: form.email,
      telefone: form.telefone,
      empresa: form.empresa,
      mensagem: form.mensagem,
    });

    setLoading(false);

    if (success) {
      toast.success("Sua solicitação foi enviada! Entraremos em contato em breve.");
      setForm(initialState);
      setErrors({});
      setTouched({});
    } else {
      console.error(error);
      toast.error("Erro ao enviar sua solicitação. Por favor, tente novamente.");
    }
  };

  const hasError = (field: keyof FormState) => touched[field] && errors[field];
  const hasSuccess = (field: keyof FormState) => touched[field] && !errors[field] && form[field].length > 0;

  return (
    <section id="contato" ref={ref} className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: "radial-gradient(circle, #0077FF 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: "radial-gradient(circle, #25D366 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 self-start text-sm font-semibold px-4 py-2 rounded-full border shadow-sm"
              style={{
                backgroundColor: "#E8F3FF",
                color: "#0077FF",
                borderColor: "#B3D4FF",
              }}
            >
              <MessageSquare className="w-4 h-4" />
              Fale Conosco
            </motion.span>

            <h2 className="heading-lg text-gray-900 leading-tight">
              Pronto para transformar seu site em uma{" "}
              <span className="relative inline-block">
                <span className="text-blue-600">máquina de clientes?</span>
                <motion.div
                  className="absolute -bottom-3 left-0 w-full h-3 bg-blue-200/40 -z-10 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
            </h2>

            <div className="section-accent-line ml-0" />

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-4">
              Preencha o formulário e nossa equipe entrará em contato em até{" "}
              <strong className="text-gray-900">24 horas</strong> para entender seu negócio e apresentar a
              melhor proposta.
            </p>

            <ul className="flex flex-col gap-4 mt-6">
              {[
                { icon: Target, text: "Análise gratuita do seu negócio" },
                { icon: DollarSign, text: "Proposta personalizada sem compromisso" },
                { icon: Zap, text: "Entrega em 5 dias úteis após aprovação" },
                { icon: Settings, text: "Suporte pós-entrega garantido" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-gray-700 font-semibold flex items-center gap-3"
                >
                  <motion.div
                    className="shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="w-4 h-4 text-blue-600" />
                  </motion.div>
                  {item.text}
                </motion.li>
              ))}
            </ul>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-4 p-4 rounded-xl border border-green-200 bg-green-50/50 flex items-center gap-3"
            >
              <ShieldCheck className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-bold text-green-900 text-sm">Seus dados estão seguros</p>
                <p className="text-xs text-green-700">Não enviamos spam. Você pode sair a qualquer momento.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="card-glass p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <InputField
                id="contact-nome"
                label="Seu nome"
                placeholder="João Silva"
                value={form.nome}
                onChange={setField("nome")}
                onBlur={handleBlur("nome")}
                required
                icon={User}
                error={hasError("nome") ? errors.nome : undefined}
                success={hasSuccess("nome")}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  id="contact-email"
                  label="E-mail"
                  type="email"
                  placeholder="joao@empresa.com"
                  value={form.email}
                  onChange={setField("email")}
                  onBlur={handleBlur("email")}
                  required
                  icon={Mail}
                  error={hasError("email") ? errors.email : undefined}
                  success={hasSuccess("email")}
                />

                <InputField
                  id="contact-telefone"
                  label="WhatsApp"
                  type="tel"
                  placeholder="(00) 90000-0000"
                  value={form.telefone}
                  onChange={setField("telefone")}
                  onBlur={handleBlur("telefone")}
                  required
                  icon={Phone}
                  error={hasError("telefone") ? errors.telefone : undefined}
                  success={hasSuccess("telefone")}
                />
              </div>

              <InputField
                id="contact-empresa"
                label="Nome da empresa"
                placeholder="Minha Empresa Ltda"
                value={form.empresa}
                onChange={setField("empresa")}
                icon={Building2}
              />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-mensagem" className="text-sm font-bold text-gray-700">
                  Conte um pouco sobre seu negócio
                </label>
                <div className="relative">
                  <textarea
                    id="contact-mensagem"
                    rows={4}
                    placeholder="Ex: Tenho uma loja de roupas e preciso de um site para vender online..."
                    value={form.mensagem}
                    onChange={(e) => setField("mensagem")(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 text-base outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 placeholder:text-gray-400/60 resize-none peer"
                  />
                  <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-gray-400 pointer-events-none z-10 transition-all duration-300 peer-focus:scale-110" />
                </div>
              </div>

              <motion.button
                id="contact-submit"
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-4 text-lg mt-2 group"
                whileHover={{ scale: loading ? 1 : 1.01 }}
                whileTap={{ scale: loading ? 1 : 0.99 }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Quero meu site que vende
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
