/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        scrollbarThumb: "#3b82f6", // Warna untuk scrollbar thumb
        scrollbarTrack: "#f1f5f9", // Warna untuk scrollbar track
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"], // Tambahkan konfigurasi font di sini
      },
    },
  },
  plugins: [require("tailwind-scrollbar")], // Pastikan hanya ada satu deklarasi plugins
};
