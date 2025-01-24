/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #a500ce, #000000 50.42%)',
        'custom-gradient2': 'linear-gradient(to left, #a500ce, #000000 50.42%)',
      },
      backgroundSize: {
        '100': '100% 50%',
      },
      fontFamily: {
        helv: ['Helvetica'], 
      },
      backgroundAttachment: {
        'fixed': 'fixed',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      blur: {
        xs: '2px',
        x3s: '3px',
        xxxs: '1px'
      },
      colors: {
        xwhite: '#ffffff', 
        xwhite2: '#96b5c1', 
      },
      fontSize: {
        sm: '0.8rem',
        xxs: '0.6rem',
        base: '1rem',
        xl: '2.25rem',
        titlexl: '2.95rem',
        'title': '1.263rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.25em',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  
};
