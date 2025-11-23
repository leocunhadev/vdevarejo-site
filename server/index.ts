import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Define o caminho estático
const staticPath = process.env.NODE_ENV === "production"
  ? path.resolve(__dirname, "../public") // Ajuste conforme a estrutura de pastas da Vercel
  : path.resolve(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// MODIFICAÇÃO CRUCIAL:
// Só roda o listen se estiver localmente.
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

// Exporta o app para a Vercel executar
export default app;