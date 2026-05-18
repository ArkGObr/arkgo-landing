import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const LeadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional().or(z.literal("")),
  city: z.string().max(120).optional().or(z.literal("")),
  interest: z.enum(["fila", "duvida", "parceria"]).default("fila"),
  message: z.string().max(2000).optional().or(z.literal("")),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("arkgo_leads").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      city: data.city || null,
      interest: data.interest,
      message: data.message || null,
    });
    if (error) throw new Error(error.message);
    return { ok: true };
  });