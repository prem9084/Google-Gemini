import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://google-gemini-ab5g.onrender.com/",
  //       secure: true,
  //     },
  //   },
  // },
});
