class ContactController {
  async index(request, response) {
    response.send('Testando rota index');
  }

  async show(request, response) {
    response.send('Testando rota show');
  }

  async store(request, response) {
    response.send('Testando rota store');
  }

  async update(request, response) {
    response.send('Testando rota update');
  }

  async delete(request, response) {
    response.send('Testando rota delete');
  }
}

module.exports = new ContactController();
