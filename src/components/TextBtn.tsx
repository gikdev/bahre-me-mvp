interface TextBtnProps {
  text: string
  onClick?: () => void
  type?: "button" | "submit"
}

export function TextBtn({ text, onClick, ...others }: TextBtnProps) {
  return (
    <button onClick={onClick} type="button" className="
      text-brand-9 cursor-pointer
      hover:bg-brand-9 hover:text-slate-12
      focus:bg-brand-9 focus:text-slate-12
      focus:outline-none transition-colors
    " {...others}>
      [{text}]
    </button>
  )
}