require('esbuild').build({
  outdir: "dist",
  bundle: true,
  entryPoints: ["src/main.ts"],
  jsx: "transform",
  jsxFactory: "jsx",
  tsconfig: "tsconfig.json"
})
.catch(err => console.log(err));