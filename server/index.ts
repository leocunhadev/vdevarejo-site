import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Define onde estão os arquivos do frontend
const staticPath = process.env.NODE_ENV === "production"
  ? path.resolve(__dirname, "../public") // Na Vercel, ajusta o caminho
  : path.resolve(__dirname, "..", "dist", "public"); // Local

// Serve arquivos estáticos (apenas se rodar localmente ou for necessário)
app.use(express.static(staticPath));

// Rota principal (para API, se você for adicionar depois)
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// IMPORTANTE: Não use app.get("*") aqui se usar a Vercel para o frontend.
// Deixe a Vercel cuidar do roteamento do React.

// Só inicia o servidor se NÃO estiver na Vercel (Ambiente Local)
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

// OBRIGATÓRIO: Exportar o app para a Vercel transformar em Serverless Function
export default app;