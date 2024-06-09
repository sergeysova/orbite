import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    router: "src/router.ts",
  },
  outExtension({ format }) {
    return { js: format === "cjs" ? ".cjs" : ".js" };
  },
  target: ["es2015", "es2022", "node16"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
});
