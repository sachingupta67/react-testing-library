/// vite.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    css: true,
    coverage: {
      provider: "v8", // or 'c8'
      reporter: ["text", "html"],
      include: ["src/**/*.{ts,tsx,js,jsx}"], // ✅ Include specific files
      exclude: [
        "node_modules/",
        "dist/",
        "**/*.d.ts", // ✅ Type declaration files
        "**/*.type.ts", // ✅ Custom type files
        "**/*.interface.ts", // ✅ Interface definition files
        "**/__tests__/**", // Optional: exclude test folders
        "**/*.test.*", // Optional: exclude test files
        "**/*.spec.*", // Optional: exclude spec files
        "src/main.tsx"
      ],
      thresholds: {
        lines: 80,
        statements: 80,
        branches: 70,
        functions: 75,
      },
    },
  },
});
