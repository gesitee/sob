/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        sob: {
          green: '#008B3E',
          orange: '#FF6E00',
        },
        grab: '#00B14F'
      },
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        soft: '0 20px 40px -15px rgba(0,0,0,.06)',
        glow: '0 10px 30px rgba(0,139,62,.20)',
      },
      maxWidth: {
        content: '1280px',
      }
    }
  },
  plugins: [],
};
