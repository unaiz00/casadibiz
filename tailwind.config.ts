import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xs: "390px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            colors: {
                ivory: "#fbf7f0",
                gold: {
                    DEFAULT: "#c8a15a",
                    soft: "#d9bd85",
                },
                navy: {
                    DEFAULT: "#16233c",
                    deep: "#0f1a2e",
                },
                "border-luxe": "#e9dbc1",
            },
            fontFamily: {
                display: ["Playfair Display", "serif"],
                sans: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;