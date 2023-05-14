class PaisController {
  async index(req, res) {
    try {
      const paises = await PaisModel.findAll();
      return res.json({ paises });
    } catch (error) {
      return res.status(400).json({ mensagem: 'Erro ao buscar países', error });
    }
  }

  async create(req, res) {
    try {
      const novoPais = await PaisModel.create(req.body);
      return res.json({
        mensagem: 'País criado com sucesso',
        pais: novoPais
      });
    } catch (error) {
      return res.status(400).json({ mensagem: 'Erro ao criar país', error });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const pais = await PaisModel.findByPk(id);

      if (!pais) {
        return res.status(404).json({ mensagem: 'País não encontrado' });
      }

      const paisAtualizado = await pais.update(req.body);
      return res.json({
        mensagem: 'País atualizado com sucesso',
        pais: paisAtualizado
      });
    } catch (error) {
      return res.status(400).json({ mensagem: 'Erro ao atualizar país', error });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const pais = await PaisModel.findByPk(id);

      if (!pais) {
        return res.status(404).json({ mensagem: 'País não encontrado' });
      }

      await pais.destroy();
      return res.json({ mensagem: 'País removido com sucesso' });
    } catch (error) {
      return res.status(400).json({ mensagem: 'Erro ao remover país', error });
    }
  }
}

module.exports = PaisController;
