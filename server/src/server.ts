import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json()) // Entendendo requests do tipo JSON

// GET, POST, PUT, DELETE

// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação (paramêtros que são enviados na própria URL. Ex.: /users?page=2&sort="name" | Página 2, ordenada pelo Nome)

app.use(routes)

app.listen(3333, () => {
  console.log('Servidor rodando na porta ' + 3333)
})