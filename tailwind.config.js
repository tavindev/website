/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'github-dark': '#0d1117',
                'github-green': '#238636',
                'github-light': '#f0f6fc',
                'github-card': '#30363d',
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
        plugins: [require('@tailwindcss/typography')],
    },
};
