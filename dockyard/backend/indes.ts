// backend/index.ts
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello from DockYard backend!');
});

app.listen(4000, () => {
  console.log('API running on http://localhost:4000');
});
