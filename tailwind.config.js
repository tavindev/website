/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#374151',
            '--tw-prose-headings': '#171717',
            '--tw-prose-links': '#171717',
            '--tw-prose-code': '#171717',
            maxWidth: '72ch',
            a: {
              textDecorationThickness: '1px',
              textUnderlineOffset: '2px',
            },
            code: {
              backgroundColor: '#f3f4f6',
              padding: '0.15em 0.3em',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            pre: {
              backgroundColor: '#1e1e2e',
              borderRadius: '0.5rem',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#d4d4d4',
            '--tw-prose-headings': '#fafafa',
            '--tw-prose-links': '#fafafa',
            '--tw-prose-code': '#fafafa',
            code: {
              backgroundColor: '#262626',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
