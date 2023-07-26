/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                md: "4rem",
            },
        },
        extend: {
            colors: {
                "main-color": "#F85559",
            },
        },
    },
    plugins: [require("daisyui")],
};
