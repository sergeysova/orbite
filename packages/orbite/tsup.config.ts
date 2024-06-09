import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    router: "src/router.ts",
    patronum: "src/patronum.ts",
    "storage/index": "src/storage/index.ts",
    "storage/local": "src/storage/local.ts",
    "storage/query": "src/storage/query.ts",
    "storage/session": "src/storage/session.ts",
    factorio: "src/factorio.ts",
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
