import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (_req, res) => res.json({ ok: true }));
app.get('/', (_req, res) => res.send('<h1>Hola</h1><p>App en GitHub Actions</p>'));

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on ${port}`));
}

export default app;
