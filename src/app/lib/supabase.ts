import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Lead = {
  id?: string;
  nome: string;
  email: string;
  telefone: string;
  empresa?: string;
  mensagem?: string;
  created_at?: string;
};

export async function insertLead(lead: Omit<Lead, "id" | "created_at">): Promise<{ success: boolean; error?: string }> {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase não configurado. Dados do lead:", lead);
    return { success: true };
  }

  const { error } = await supabase.rpc("insert_lead", {
    p_nome: lead.nome,
    p_email: lead.email,
    p_telefone: lead.telefone,
    p_empresa: lead.empresa ?? "",
    p_mensagem: lead.mensagem ?? "",
  });

  if (error) {
    console.error("Erro ao inserir lead:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
