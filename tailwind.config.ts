import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f5f0',
        foreground: '#2E2E2E',
        primary: '#8C6A5D',
        accent: '#D7B49E',
        neutral: '#F4EFEA'
      },
      maxWidth: {
        '8xl': '90rem'
      }
    }
  },
  plugins: []
};

export default config;
