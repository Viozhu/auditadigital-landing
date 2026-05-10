/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink:      '#050505',
        'ink-2':  '#0b0b0c',
        'ink-3':  '#121214',
        'ink-4':  '#18181c',
        line:     '#1f1f23',
        'line-2': '#2a2a30',
        mute:     '#6a6a73',
        'mute-2': '#9b9ba6',
        paper:    '#ffffff',
        blue:     '#2e5bff',
        'blue-soft': '#1a3399',
        'blue-ink':  '#0e1f5c',
        green:    '#a3ff12',
        orange:   '#ff5c00',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body:    ['"Geist"',         'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"','ui-monospace', 'monospace'],
      },
      borderRadius: {
        xs: '2px',
        s:  '4px',
        m:  '6px',
        DEFAULT: '4px',
      },
      spacing: {
        '4':  '4px',
        '8':  '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
        '128': '128px',
      },
      fontSize: {
        'mono-tag': ['12px',  { lineHeight: '1.4',  letterSpacing: '0.08em' }],
        small:      ['14px',  { lineHeight: '1.5',  letterSpacing: '0' }],
        body:       ['16px',  { lineHeight: '1.55', letterSpacing: '0' }],
        'body-l':   ['18px',  { lineHeight: '1.5',  letterSpacing: '0' }],
        h2:         ['22px',  { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h1:         ['32px',  { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-m':['48px',  { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-l':['72px',  { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-xl':['120px',{ lineHeight: '0.88', letterSpacing: '-0.05em' }],
      },
      boxShadow: {
        'btn-primary': 'inset 0 -2px 0 rgba(0,0,0,0.25)',
      },
      keyframes: {
        pulse: { '50%': { opacity: '0.35' } },
      },
      animation: {
        pulse: 'pulse 1.6s infinite',
      },
    },
  },
  plugins: [],
};
