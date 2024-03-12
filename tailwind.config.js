/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1020px",
      },
      strokeWidth: {
        2: "2px",
      },
      section: {
        "mb-5": "mb-5",
      },
      dropShadow: {
        "3xl": "0 2px 20px rgba(0,0, 0, 0, 10",
      },
      body: {
        md: "max-h-screen",
      },
    },
  },
  variants: {},
  plugins: [],
};
