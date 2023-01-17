const express = require('express'); /* Importando o express */

const routes = require('./routes'); /* Importando as rotas */

const app = express(); /* Executando a função express importada na linha 1 */

app.use(express.json()); /* Função para receber os bodys das requisições */

app.use(routes); /* Consumindo as rotas */

/* TRATAR OS ERROS NO FINAL
app.use((error, request, response, next) = {
  console.log(error);
  response.sendStatus(500);
})
*/

app.listen(3002, () => console.log('🔥 Server started in http://localhost:3002'));
