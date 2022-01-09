module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
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
                'infinite-carousel': 'infinite-carousel 38s infinite linear',
            },
            colors: {
                primary: '#01E472',
                'semi-black': '#12181B',
            },
            fontFamily: {
                poppins: 'Poppins',
            },
        },
    },
    plugins: [],
}
