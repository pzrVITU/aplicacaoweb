const Sequelize = require('sequelize');
const express = require('express');app = express();
const fs = require('fs');
const PaisController = require('./PaisController');


app.use(express.json());

app.get('/', function(req, res) {
  res.send('API - Banco de dados');
});

let paises = [{
    "id": 1,
    "nome": "Brasil",
    "descricao": "3º mundo",
    "populacao": 280000000,
    "lingua": "Portugues"
},{
    "id": 2,
    "nome": "Afeganistao",
    "descricao": "3º mundo",
    "populacao": 39800000,
    "lingua": "Dari e Pashto"
}];

app.get('/paises', function(req, res) {
    return res.json({ paises });
  });

app.post("/paises", (req, res) => {
    // Definir um ID para o novo país
    const novoId = paises.length + 1;

    // Criar o objeto do novo país
    const novoPaises = {
      id: novoId,
      nome: req.body.nome,
      descricao: req.body.descricao,
      populacao: req.body.populacao,
      lingua: req.body.lingua,
    };

    // Adicionar o novo pais à lista de paises
    paises.push(novoPaises);

    // Retornar a lista de pais atualizada
    return res.json({
      mensagem: "Paises criado com sucesso",
      paises: paises,
    });
  });

  app.delete('/paises/:id', function(req, res) {
    const id = req.params.id;
    const index = paises.findIndex(p => p.id == id);

    if (index < 0) {
      return res.status(404).json({ mensagem: "Pais não encontrado" });
    }

    paises.splice(index, 1);

    return res.json({ mensagem: "Pais removido com sucesso" });
  });

  app.put('/paises/:id', function(req, res) {
    var id = req.params.id;
    var paisesIndex = paises.findIndex(function(paises) {
      return paises.id == id;
    });
    if (paisesIndex != -1) {
      paises[paisesIndex] = {
        id: id,
        nome: req.body.nome,
        descricao: req.body.descricao,
        populacao: req.body.populacao,
        lingua: req.body.lingua
      };
      res.json(paises[paisesIndex]);
    } else {
      res.status(404).send('Paises não encontrado');
    }
  });



//Starta o webserver
app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});

