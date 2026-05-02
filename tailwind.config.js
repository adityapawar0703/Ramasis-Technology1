/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Dark
        ink: '#050505',
        surface: '#0A0A0A',
        elevated: '#111111',
        edge: '#1A1A1A',
        // Accents
        signal: '#00FF9D',
        cyan: '#00E5FF',
        signalDim: '#00C479',
        // Light
        paper: '#F8F9FA',
        paperSurface: '#FFFFFF',
        paperElevated: '#F4F4F5',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 18s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scan-line': 'scanLine 6s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
};
