import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // Allow external connections, including ngrok
    port: 3000, // Ensure ngrok is forwarding to this port
    strictPort: true, // Ensures Vite only runs on the specified port
    cors: true, // Enable CORS if needed
  },
});
