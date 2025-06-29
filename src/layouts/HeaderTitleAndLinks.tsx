import type { ReactNode } from "@tanstack/react-router"

interface HeaderTitleAndLinksProps {
  children?: ReactNode
  title: string
}

export function HeaderTitleAndLinks({ children, title }: HeaderTitleAndLinksProps) {
  return (
    <header className='flex items-center mb-4 border-b border-dashed border-slate-6 pb-2'>
      <h1 className="font-black text-slate-12 text-2xl">{title}</h1>

      <div className='ms-auto inline-flex gap-2'>
        {children}
      </div>
    </header>
  )
}