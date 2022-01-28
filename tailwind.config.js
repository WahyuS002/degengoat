module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                blink: {
                    '0%': { opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                'infinite-carousel': {
                    '0%': {
                        transform: 'translateX(0%)',
                    },
                    '100%': {
                        transform: 'translateX(calc(-250px * 7))',
                    },
                },
            },
            animation: {
                wiggle: 'wiggle 0.5s ease-in-out infinite',
                blink: 'blink 1.2s linear infinite',
                'infinite-carousel': 'infinite-carousel 38s infinite linear',
            },
            colors: {
                primary: '#01E472',
                'semi-black': '#12181B',
                'semi-black-900': '#12181B',
            },
            fontFamily: {
                poppins: 'Poppins',
            },
        },
    },
    plugins: [],
}
