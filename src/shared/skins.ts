export const skins = {
  link: (className = "") => `
    border-b-2 border-transparent
    hover:border-current
    text-sky-11 hover:text-sky-12
    transition-colors
    ${className}
  `,

  btns: {
    text: {
      primary: (className = "") => `
        text-brand-9 cursor-pointer
        hover:bg-brand-9 hover:text-slate-12
        focus:bg-brand-9 focus:text-slate-12
        focus:outline-none transition-colors
        ${className}
      `,
      danger: (className = "") => `
        text-red-9 cursor-pointer
        hover:bg-red-9 hover:text-slate-12
        focus:bg-red-9 focus:text-slate-12
        focus:outline-none transition-colors
        ${className}
      `,
    }
  },
}