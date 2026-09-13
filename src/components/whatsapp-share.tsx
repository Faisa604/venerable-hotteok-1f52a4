import { MessageCircle } from 'lucide-react'

type WhatsAppShareProps = {
  title: string
  path: string
  compact?: boolean
}

export function WhatsAppShare({ title, path, compact = false }: WhatsAppShareProps) {
  const shareText = `${title}\n${path}`
  const href = `https://wa.me/?text=${encodeURIComponent(shareText)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`مشاركة ${title} عبر واتساب`}
      className={compact
        ? 'inline-flex items-center gap-1.5 border border-[#25D366]/35 bg-[#25D366]/10 px-3 py-2 text-xs font-kufi font-bold text-[#168a43] hover:bg-[#25D366]/20 transition-colors'
        : 'inline-flex items-center gap-2 border border-[#25D366]/35 bg-[#25D366]/10 px-4 py-2.5 text-xs font-kufi font-bold text-[#168a43] hover:bg-[#25D366]/20 transition-colors'}
    >
      <MessageCircle size={compact ? 15 : 17} aria-hidden="true" />
      <span>مشاركة واتساب</span>
    </a>
  )
}
