import BrandMark from '@/components/BrandMark'
import ActionCard from '@/components/ActionCard'
import { MAIN_LINKS } from '@/config/links'

export default function App() {
  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between bg-[#17182f] text-white overflow-x-hidden selection:bg-[#ff9821] selection:text-[#17182f]">
      {/* Background layer 1: Authentic Hero Image with overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/hero/hero-background.webp"
          alt=""
          className="w-full h-full object-cover object-center scale-105 opacity-35"
        />
        <div className="hero-overlay-gradient" />
        <div className="recife-grid absolute inset-0 opacity-15" />
        <div className="hero-noise" aria-hidden="true" />
      </div>

      {/* Header bar com logo centralizada */}
      <header className="relative z-10 w-full border-b border-white/10 bg-[#17182f]/70 backdrop-blur-md">
        <div className="w-[min(640px,calc(100%-24px))] mx-auto h-[68px] sm:h-[78px] flex items-center justify-center">
          <BrandMark />
        </div>
      </header>

      {/* Main Container - Mobile Optimized Viewport */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-[min(540px,calc(100%-24px))] mx-auto py-8 sm:py-12">
        {/* Kicker badge */}
        <div className="animate-stagger-1 flex items-center gap-2 mb-3.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-[#ff9821] shadow-[0_0_0_4px_rgba(255,152,33,0.2)]" />
          <span className="font-['Oxanium'] text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-white/80">
            Hub Oficial de Acessos • Recife
          </span>
        </div>

        {/* Section title in Oxanium modular typography */}
        <div className="animate-stagger-1 w-full text-center mb-6">
          <h1 className="font-['Oxanium'] font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-[-0.05em] leading-[1.05] text-white">
            Porta de Entrada <span className="text-[#ff9821]">PassaAqui</span>
          </h1>
          <p className="font-['Manrope'] text-xs sm:text-sm text-white/70 mt-2 max-w-md mx-auto leading-relaxed">
            Navegue pelos canais oficiais da plataforma que transforma o Centro do Recife em uma experiência urbana.
          </p>
        </div>

        {/* The 3 Action Buttons */}
        <div className="w-full flex flex-col gap-3">
          {MAIN_LINKS.map((link, index) => (
            <ActionCard key={link.id} link={link} index={index} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-white/10 bg-[#141530]/90 py-4">
        <div className="w-[min(640px,calc(100%-24px))] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <span className="font-['Oxanium'] text-[10px] uppercase tracking-wider text-white/40">
            © {new Date().getFullYear()} PassaAqui • Centro do Recife
          </span>
          <span className="font-['Oxanium'] text-[10px] uppercase tracking-wider text-[#78bfc1]/70">
            Tecnologia Urbana
          </span>
        </div>
      </footer>
    </div>
  )
}
