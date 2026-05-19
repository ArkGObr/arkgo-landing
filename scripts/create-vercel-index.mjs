import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const clientDir = "dist/client";
const assetsDir = join(clientDir, "assets");
const files = await readdir(assetsDir);

const cssFiles = files.filter((file) => file.endsWith(".css")).sort();
const jsFiles = files.filter((file) => file.endsWith(".js")).sort();
const entryJsFiles = [];

for (const file of jsFiles) {
  const code = await readFile(join(assetsDir, file), "utf8");
  if (code.includes("hydrateRoot(document")) {
    entryJsFiles.push(file);
  }
}

const scripts = entryJsFiles.length > 0 ? entryJsFiles : jsFiles;

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ArkGo — Mobilidade urbana em um novo nível</title>
    <meta name="description" content="Plataforma completa de mobilidade urbana: delivery, mototáxi, transporte, fretes e cargas." />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <script>
      history.scrollRestoration = "manual";
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
      scrollTo(0, 0);
    </script>
    ${cssFiles.map((file) => `<link rel="stylesheet" href="/assets/${file}" />`).join("\n    ")}
  </head>
  <body>
    <div id="root"></div>
    ${scripts.map((file) => `<script type="module" src="/assets/${file}"></script>`).join("\n    ")}
  </body>
</html>
`;

await writeFile(join(clientDir, "index.html"), html, "utf8");
