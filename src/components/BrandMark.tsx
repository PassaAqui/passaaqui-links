import logo from '@/assets/logo/logo.webp'

interface BrandMarkProps {
  compact?: boolean
  className?: string
}

export default function BrandMark({ compact = false, className = '' }: BrandMarkProps) {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <img
        src={logo}
        alt="Símbolo do PassaAqui"
        className="w-11 h-11 md:w-12 md:h-12 object-contain"
        style={{ borderRadius: 14 }}
      />

      {!compact && (
        <span
          className="font-['Oxanium'] text-2xl md:text-3xl font-bold tracking-[-0.075em] uppercase text-white leading-none"
          aria-label="PassaAqui"
        >
          passa<span className="text-[#ff9821]">aqui</span>
        </span>
      )}
    </div>
  )
}
