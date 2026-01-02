/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                surface: "#121212",
                primary: "#3b82f6", // Blue
                secondary: "#10b981", // Emerald
                text: {
                    primary: "#ededed",
                    secondary: "#a1a1aa",
                    muted: "#52525b",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
