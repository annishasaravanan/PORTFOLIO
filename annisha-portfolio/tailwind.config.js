/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4F46E5",
                secondary: "#7C3AED",
                dark: "#0F172A",
                light: "#F8FAFC",
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
