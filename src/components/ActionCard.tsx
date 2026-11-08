import { ArrowUpRight, BookOpen, Presentation, Smartphone, Globe } from 'lucide-react'
import type { HubLink } from '@/config/links'

const iconMap = {
  Smartphone,
  BookOpen,
  Presentation,
  Globe,
}

interface ActionCardProps {
  link: HubLink
  index?: number
}

export default function ActionCard({ link, index = 0 }: ActionCardProps) {
  const IconComponent = iconMap[link.iconName] || Globe
  const isPrimary = link.variant === 'primary'

  // Stagger delays based on better-ui
  const staggerClass = [
    'animate-stagger-2',
    'animate-stagger-3',
    'animate-stagger-4',
  ][index] || 'animate-stagger-2'

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`touch-card ${staggerClass} group relative flex flex-col w-full text-left p-4 sm:p-5 rounded-none border border-white/20 overflow-hidden select-none min-h-[92px] ${
        isPrimary
          ? 'bg-[#181935]/90 border-[#ff9821]/70 shadow-[4px_4px_0_rgba(255,152,33,0.95)] sm:shadow-[5px_5px_0_rgba(255,152,33,0.95)] hover:shadow-[6px_6px_0_rgba(255,152,33,1)]'
          : 'bg-[#17182f]/80 hover:bg-[#20213d] border-white/20 hover:border-white/40 shadow-[4px_4px_0_rgba(255,255,255,0.12)] hover:shadow-[4px_4px_0_rgba(120,191,193,0.45)]'
      }`}
    >
      {/* Editorial route index & tag */}
      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/10 w-full">
        <div className="flex items-center gap-2">
          <span
            className={`font-['Oxanium'] text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase ${
              isPrimary ? 'text-[#ff9821]' : 'text-[#78bfc1]'
            }`}
          >
            {link.tag}
          </span>
          <span className="w-3.5 h-[1px] bg-white/20" />
        </div>

        {link.badge && (
          <span
            className={`font-['Oxanium'] text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.06em] px-2 py-0.5 border ${
              isPrimary
                ? 'bg-[#ff9821]/20 text-[#ff9821] border-[#ff9821]/50'
                : 'bg-white/5 text-white/70 border-white/20'
            }`}
          >
            {link.badge}
          </span>
        )}
      </div>

      {/* Main card body with mobile-first thumb target alignment */}
      <div className="flex items-center justify-between gap-3 pt-3.5 w-full">
        <div className="flex items-center gap-3.5 min-w-0 flex-1">
          {/* Square technical icon enclosure (optical centering & exact stroke) */}
          <div
            className={`w-11 h-11 shrink-0 flex items-center justify-center border transition-colors duration-150 ${
              isPrimary
                ? 'bg-[#ff9821] text-[#17182f] border-[#ff9821]'
                : 'bg-white/5 text-[#78bfc1] border-white/20 group-hover:border-[#78bfc1] group-hover:text-white'
            }`}
          >
            <IconComponent className="w-5 h-5" strokeWidth={2.2} />
          </div>

          <div className="min-w-0 flex-1 pr-1">
            <h2 className="font-['Oxanium'] text-base sm:text-lg font-bold tracking-[-0.02em] uppercase text-white group-hover:text-[#ff9821] transition-colors duration-150 truncate">
              {link.title}
            </h2>
            <p className="font-['Manrope'] text-xs text-white/70 mt-1 line-clamp-1 sm:line-clamp-2 leading-relaxed">
              {link.subtitle}
            </p>
          </div>
        </div>

        {/* Direction arrow badge with 44px hit-box friendly footprint */}
        <div
          className={`shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-150 ${
            isPrimary
              ? 'border-[#ff9821]/50 text-[#ff9821] group-hover:bg-[#ff9821] group-hover:text-[#17182f]'
              : 'border-white/20 text-white/50 group-hover:border-white group-hover:text-white'
          }`}
        >
          <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  )
}
