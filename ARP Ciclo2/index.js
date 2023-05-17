//Victor Henrique Fernandes Silva
//Matricula: 2120668

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function(req, res) {
  res.send('API Pacientes');
});

// Hardcoded data for testing purposes
let pacientes = [
  {
    "idPaciente": 1,
    "nome": "João Silva",
    "dataNascimento": "1985-01-01",
    "cartaoConvenio": "1234567890"
  },
  {
    "idPaciente": 2,
    "nome": "Maria Santos",
    "dataNascimento": "1990-05-15",
    "cartaoConvenio": "0987654321"
  }
];

app.get('/pacientes', function(req, res) {
  return res.json({ pacientes });
});

app.post("/pacientes", (req, res) => {
  // Define a new ID for the new patient
  const novoId = pacientes.length + 1;

  // Create the new patient object
  const novoPaciente = {
    idPaciente: novoId,
    nome: req.body.nome,
    dataNascimento: req.body.dataNascimento,
    cartaoConvenio: req.body.cartaoConvenio,
  };

  // Add the new patient to the array
  pacientes.push(novoPaciente);

  // Return the updated patient array
  return res.json({
    mensagem: "Paciente criado com sucesso",
    pacientes: pacientes,
  });
});

app.delete('/pacientes/:id', function(req, res) {
  const id = req.params.id;
  const index = pacientes.findIndex(p => p.idPaciente == id);

  if (index < 0) {
    return res.status(404).json({ mensagem: "Paciente não encontrado" });
  }

  pacientes.splice(index, 1);

  return res.json({ mensagem: "Paciente removido com sucesso" });
});

app.put('/pacientes/:id', function(req, res) {
  var id = req.params.id;
  var pacienteIndex = pacientes.findIndex(function(paciente) {
    return paciente.idPaciente == id;
  });
  if (pacienteIndex != -1) {
    pacientes[pacienteIndex] = {
      idPaciente: id,
      nome: req.body.nome,
      dataNascimento: req.body.dataNascimento,
      cartaoConvenio: req.body.cartaoConvenio
    };
    res.json(pacientes[pacienteIndex]);
  } else {
    res.status(404).send('Paciente não encontrado');
  }
});

let agendamentos = [];

app.get('/agendamentos', function(req, res) {
  return res.json({ agendamentos });
});

app.post("/agendamentos", (req, res) => {
  // Definir um ID para o novo agendamento
  const novoId = agendamentos.length + 1;

  // Criar o objeto do novo agendamento
  const novoAgendamento = {
    idAgendamento: novoId,
    dataHora: req.body.dataHora,
    idPaciente: req.body.idPaciente,
    idProfissional: req.body.idProfissional
  };

  // Adicionar o novo agendamento à lista de agendamentos
  agendamentos.push(novoAgendamento);

  // Retornar a lista de agendamentos atualizada
  return res.json({
    mensagem: "Agendamento criado com sucesso",
    agendamentos: agendamentos,
  });
});

app.delete('/agendamentos/:id', function(req, res) {
  const id = req.params.id;
  const index = agendamentos.findIndex(a => a.idAgendamento == id);

  if (index < 0) {
    return res.status(404).json({ mensagem: "Agendamento não encontrado" });
  }

  agendamentos.splice(index, 1);

  return res.json({ mensagem: "Agendamento removido com sucesso" });
});

app.put('/agendamentos/:id', function(req, res) {
  var id = req.params.id;
  var agendamentoIndex = agendamentos.findIndex(function(agendamento) {
    return agendamento.idAgendamento == id;
  });
  if (agendamentoIndex != -1) {
    agendamentos[agendamentoIndex] = {
      idAgendamento: id,
      dataHora: req.body.dataHora,
      idPaciente: req.body.idPaciente,
      idProfissional: req.body.idProfissional
    };
    res.json(agendamentos[agendamentoIndex]);
  } else {
    res.status(404).send('Agendamento não encontrado');
  }
});


// Start the web server
app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000');
});