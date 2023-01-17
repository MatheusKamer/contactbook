const { Router } = require('express'); /* Importando a função de rotas */

const ContactController = require('./app/controllers/ContactController'); /* Importando o controller de contatos */

const router = Router(); /* Executando a função router importada na linha 1 */

router.get('/contacts', ContactController.index);
// router.post('/contacts', ContactController.store);
// router.put('/contacts/:id', ContactController.update);
// router.delete('/contacts/:id', ContactController.delete);
// router.get('/contacts/:id', ContactController.show);

module.exports = router; /* Exportando para uso no index.js */
