import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Zap, MapPin, CreditCard, Brain, Globe2, Rocket,
  Bike, Car, Truck, Package, Navigation, ShieldCheck,
  Activity, Wallet, Instagram, Play, Menu,
  CheckCircle2, Sparkles, Radio, Cpu,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";

import logo from "@/assets/arkgo-logo.png";
import heroBrand from "@/assets/arkgo-hero.png";
import appPhone from "@/assets/arkgo-app-phone.jpeg";
import cityBg from "@/assets/arkgo-city.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ArkGo — Mobilidade urbana em um novo nível" },
      { name: "description", content: "Plataforma completa de mobilidade urbana: delivery, mototáxi, transporte, fretes e cargas. Uma plataforma. Todas as rotas." },
      { property: "og:title", content: "ArkGo — Mobilidade urbana em um novo nível" },
      { property: "og:description", content: "Uma plataforma. Todas as rotas." },
    ],
  }),
  component: Landing,
});

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="ArkGo" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
          <a href="#tecnologia" className="hover:text-foreground transition">Tecnologia</a>
          <a href="#apps" className="hover:text-foreground transition">Apps</a>
          <a href="#fundador" className="hover:text-foreground transition">Fundador</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <a
          href="#contato"
          className="hidden md:inline-flex appearance-none border-0 items-center gap-2 bg-neon text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition glow-neon"
        >
          Entrar na fila
        </a>
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-background/95 backdrop-blur-xl border-b border-border/60 flex flex-col gap-4">
          <a href="#servicos" className="text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
          <a href="#tecnologia" className="text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>Tecnologia</a>
          <a href="#apps" className="text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>Apps</a>
          <a href="#fundador" className="text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>Fundador</a>
          <a href="#contato" className="text-foreground font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
          <a
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex appearance-none border-0 items-center justify-center gap-2 bg-neon text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition glow-neon w-full mt-2"
          >
            Entrar na fila
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100vh] pt-32 pb-24 overflow-hidden">
      <img
        src={cityBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-neon pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon/40 bg-neon/5 text-neon text-xs font-medium mb-6">
            <Sparkles className="size-3.5" /> A nova geração da mobilidade urbana
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight">
            Mobilidade urbana<br/>
            em um <span className="gradient-text text-glow">novo nível</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            A ArkGo conecta pessoas, entregas e serviços através de uma tecnologia
            moderna, rápida e inteligente. Uma plataforma. Todas as rotas.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              className="inline-flex appearance-none border-0 items-center gap-2 bg-neon text-primary-foreground px-7 py-3.5 rounded-full font-semibold animate-pulse-glow hover:scale-[1.02] transition"
            >
              <Rocket className="size-4" /> Baixar aplicativo
            </a>
            <a
              href="#tecnologia"
              className="inline-flex items-center gap-2 border border-border bg-card/40 backdrop-blur px-7 py-3.5 rounded-full font-medium hover:border-neon/50 hover:text-neon transition"
            >
              <Play className="size-4" /> Conhecer a plataforma
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "+1,5M", l: "Operações" },
              { v: "9", l: "Estados" },
              { v: "24/7", l: "Tempo real" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-neon text-glow">{s.v}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-neon/20 blur-3xl rounded-full" />
          <div className="relative animate-float">
            <img src={appPhone} alt="App ArkGo" className="relative mx-auto max-h-[640px] rounded-[2.5rem] shadow-2xl" />
            <div className="absolute -bottom-4 -left-4 bg-card border border-neon/40 rounded-2xl p-3 backdrop-blur glow-neon">
              <div className="flex items-center gap-2 text-xs">
                <Radio className="size-4 text-neon animate-pulse" />
                <span className="font-medium">Rastreamento ao vivo</span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 bg-card border border-neon/40 rounded-2xl p-3 backdrop-blur">
              <div className="flex items-center gap-2 text-xs">
                <Activity className="size-4 text-neon" />
                <span className="font-medium">GPS inteligente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Car, t: "Passageiros", d: "Corridas rápidas e seguras." },
    { icon: Package, t: "Delivery", d: "Entregas em tempo real." },
    { icon: Bike, t: "Mototáxi", d: "Mobilidade ágil para o dia a dia." },
    { icon: Truck, t: "Utilitários", d: "Fretes e logística urbana." },
  ];
  return (
    <section id="servicos" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-neon text-sm font-semibold uppercase tracking-[0.2em] mb-3">Como a ArkGo funciona</p>
          <h2 className="text-4xl md:text-5xl font-bold">Uma plataforma.<br/>Todas as rotas.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group relative p-7 rounded-3xl border border-border bg-card/60 backdrop-blur hover:border-neon/60 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="size-12 rounded-2xl bg-neon/10 border border-neon/30 flex items-center justify-center mb-5 group-hover:bg-neon/20 transition">
                  <Icon className="size-6 text-neon" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t}</h3>
                <p className="text-muted-foreground text-sm">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tech() {
  const features = [
    { icon: Navigation, t: "GPS de alta precisão", d: "Rotas otimizadas em tempo real." },
    { icon: Brain, t: "IA aplicada", d: "Match inteligente motorista x demanda." },
    { icon: ShieldCheck, t: "Segurança total", d: "Verificação e monitoramento 24/7." },
    { icon: Cpu, t: "Infra escalável", d: "Operação fluida em qualquer escala." },
  ];
  return (
    <section id="tecnologia" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-neon text-sm font-semibold uppercase tracking-[0.2em] mb-3">Tecnologia ArkGo</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Construída para <span className="gradient-text">cidades modernas</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Uma stack tecnológica robusta, pronta para escalar: rastreamento em tempo
            real, IA, mapas vivos, estabilidade e velocidade em uma única plataforma.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, t, d }) => (
              <div key={t} className="p-5 rounded-2xl border border-border bg-card/60 backdrop-blur">
                <Icon className="size-5 text-neon mb-3" />
                <div className="font-semibold">{t}</div>
                <div className="text-sm text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-12 bg-neon/15 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden border border-neon/30 glow-neon">
            <img src={heroBrand} alt="ArkGo brand" className="w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Apps() {
  return (
    <section id="apps" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-10 bg-neon/20 blur-3xl rounded-full" />
          <img src={appPhone} alt="App do Cliente" className="relative max-h-[600px] mx-auto rounded-[2.5rem] border border-border" loading="lazy" />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-neon text-sm font-semibold uppercase tracking-[0.2em] mb-3">Apps ArkGo</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Para clientes<br/>e motoristas.</h2>
          <div className="space-y-5">
            {[
              { icon: MapPin, t: "App do Cliente", d: "Solicitar corrida, delivery, rastrear pedidos e pagamentos integrados." },
              { icon: Wallet, t: "App do Motorista", d: "Acompanhe ganhos, corridas, performance e mapa em tempo real." },
              { icon: CreditCard, t: "Pagamentos integrados", d: "Cartão, Pix e carteira digital prontos do dia 1." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4 p-5 rounded-2xl border border-border bg-card/40 hover:border-neon/50 transition">
                <div className="size-11 shrink-0 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center">
                  <Icon className="size-5 text-neon" />
                </div>
                <div>
                  <div className="font-semibold">{t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    { icon: Zap, t: "Operação rápida" },
    { icon: MapPin, t: "Rastreamento em tempo real" },
    { icon: CreditCard, t: "Pagamentos integrados" },
    { icon: Brain, t: "Tecnologia inteligente" },
    { icon: Globe2, t: "Plataforma escalável" },
    { icon: Rocket, t: "Sistema moderno" },
  ];
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 radial-neon opacity-50" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-neon text-sm font-semibold uppercase tracking-[0.2em] mb-3">Diferenciais</p>
          <h2 className="text-4xl md:text-5xl font-bold">O ecossistema completo<br/>da mobilidade urbana.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, t }) => (
            <div key={t} className="relative p-7 rounded-3xl border border-neon/20 bg-gradient-to-br from-card/80 to-card/30 backdrop-blur hover:border-neon transition group">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-neon/15 border border-neon/40 flex items-center justify-center group-hover:bg-neon group-hover:text-primary-foreground transition">
                  <Icon className="size-6 text-neon group-hover:text-primary-foreground transition" />
                </div>
                <div className="font-semibold text-lg">{t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="fundador" className="py-28 px-6">
      <div className="max-w-6xl mx-auto rounded-[2rem] border border-border bg-card/60 backdrop-blur p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 size-80 bg-neon/20 blur-3xl rounded-full" />
        <div className="relative grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <div>
            <div
              className="relative aspect-square rounded-3xl bg-gradient-to-br from-neon/30 to-card border border-neon/40 overflow-hidden glow-neon"
              aria-label="Carlos André Gomes, fundador da ArkGo"
            >
              <div className="absolute inset-0 flex items-center justify-center text-7xl font-extrabold gradient-text">
                CA
              </div>
              <img
                src="/fundador-carlos.jpg?v=2"
                alt=""
                className="absolute inset-0 z-10 h-full w-full object-cover object-[35%_50%]"
                decoding="async"
                loading="eager"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
            <a
              href="https://www.instagram.com/oreidodeliverybr?igsh=MWR4bXVkdWt4bHpoZA%3D%3D"
              target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-neon hover:underline"
            >
              <Instagram className="size-4" /> Seguir no Instagram
            </a>
          </div>
          <div>
            <p className="text-neon text-sm font-semibold uppercase tracking-[0.2em] mb-3">Fundador</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Carlos André Gomes</h2>
            <p className="text-neon font-medium mb-6">"O Rei do Delivery"</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Empreendedor, especialista em mobilidade urbana e fundador da ABRA System.
                Construiu sua trajetória atuando diretamente em operações reais de
                mobilidade em <span className="text-foreground font-medium">9 estados brasileiros</span>.
              </p>
              <p>
                Responsável por mais de <span className="text-neon font-semibold">1,5 milhão de serviços</span> realizados,
                desenvolvendo expertise em delivery, mototáxi, transporte de passageiros e logística urbana.
              </p>
              <p>
                Hoje, Carlos lidera a expansão da ABRA System com foco em inovação,
                performance operacional e tecnologia robusta para o setor no Brasil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "",
    interest: "fila" as "fila" | "duvida" | "parceria",
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("arkgo_leads").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        city: form.city.trim() || null,
        interest: form.interest,
        message: form.message.trim() || null,
      });

      if (error) throw error;

      toast.success("Recebido! Em breve entraremos em contato.");
      setForm({ name: "", email: "", phone: "", city: "", interest: "fila", message: "" });
    } catch (err) {
      toast.error("Erro ao enviar. Verifique os campos e tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const input = "w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition";

  return (
    <section id="contato" className="py-28 px-6 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-neon text-sm font-semibold uppercase tracking-[0.2em] mb-3">Entre na fila</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Garanta seu acesso<br/>antecipado à ArkGo.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Deixe seu contato para entrar na fila de aquisição do sistema ou tirar dúvidas.
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card/60 backdrop-blur p-8 md:p-10 grid gap-5 glow-neon">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Nome *</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} placeholder="Seu nome completo" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">E-mail *</label>
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} placeholder="voce@email.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Telefone / WhatsApp</label>
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={input} placeholder="(11) 90000-0000" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Cidade</label>
              <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={input} placeholder="Sua cidade" />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Interesse</label>
            <div className="flex flex-wrap gap-2">
              {([
                { v: "fila", l: "Entrar na fila" },
                { v: "duvida", l: "Tirar dúvida" },
                { v: "parceria", l: "Parceria" },
              ] as const).map((o) => (
                <button
                  key={o.v} type="button"
                  onClick={() => setForm({ ...form, interest: o.v })}
                  className={`appearance-none px-4 py-2 rounded-full text-sm border transition ${
                    form.interest === o.v
                      ? "bg-neon text-primary-foreground border-neon glow-neon"
                      : "border-border text-muted-foreground hover:border-neon/50 hover:text-foreground"
                  }`}
                >
                  {o.l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Mensagem</label>
            <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={input} placeholder="Conte mais sobre seu interesse ou dúvida..." />
          </div>
          <button
            type="submit" disabled={loading}
            className="mt-2 inline-flex appearance-none border-0 items-center justify-center gap-2 bg-neon text-primary-foreground px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
          <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-neon" /> Seus dados são protegidos e usados apenas para contato.
          </p>
        </form>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="px-6 pb-28">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-neon text-primary-foreground p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, rgba(0,0,0,0.3), transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.3), transparent 50%)"
        }} />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Sua cidade conectada<br/>pela tecnologia.
          </h2>
          <p className="mt-5 text-lg opacity-80 max-w-xl mx-auto">
            ArkGo. O futuro da mobilidade urbana brasileira.
          </p>
          <a href="#contato" className="mt-10 inline-flex appearance-none border-0 items-center gap-2 bg-ink text-foreground px-8 py-4 rounded-full font-semibold hover:scale-[1.02] transition">
            Entrar na fila agora
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
        <img src={logo} alt="ArkGo" className="h-8" />
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ArkGo · Mobilidade completa. Você em movimento.</p>
      </div>
    </footer>
  );
}

function Landing() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    scrollToTop();
    window.requestAnimationFrame(scrollToTop);
    window.setTimeout(scrollToTop, 0);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Toaster theme="dark" position="top-center" />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Tech />
        <Apps />
        <Differentials />
        <Founder />
        <LeadForm />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
