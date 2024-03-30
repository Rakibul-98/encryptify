/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'animate-bounce-reverse': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-20%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },
      },
      animation: {
        'bounce-reverse': 'animate-bounce-reverse 1s infinite',
      },
    },
  },
  plugins: [require("daisyui")],
};
