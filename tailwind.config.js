/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mb: "480px",

        sm: "576px",

        md: "768px",

        lg: "992px",

        xl: "1200px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".ruby": {
          display: "ruby-text",
        },
        ".whitespace-normal": {
          whiteSpace: "normal",
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
