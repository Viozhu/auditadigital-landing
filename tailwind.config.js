/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink:           'rgb(var(--color-ink-rgb) / <alpha-value>)',
        'ink-2':       'var(--color-ink-2)',
        'ink-3':       'var(--color-ink-3)',
        'ink-4':       'var(--color-ink-4)',
        line:          'var(--color-line)',
        'line-2':      'var(--color-line-2)',
        mute:          'var(--color-mute)',
        'mute-2':      'var(--color-mute-2)',
        paper:         'var(--color-paper)',
        blue:          'rgb(var(--color-blue-rgb) / <alpha-value>)',
        'blue-soft':   'var(--color-blue-soft)',
        'blue-ink':    'var(--color-blue-ink)',
        green:         'var(--color-green)',
        orange:        'rgb(var(--color-orange-rgb) / <alpha-value>)',
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
