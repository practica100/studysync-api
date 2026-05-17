const grupos = require("../models/gruposModel");

const obtenerGrupos = (req, res) => {
  res.status(200).json(grupos);
};

const obtenerGrupoPorId = (req, res) => {
  const grupo = grupos.find(g => g.id == req.params.id);

  if (!grupo) {
    return res.status(404).json({
      mensaje: "Grupo no encontrado"
    });
  }

  res.status(200).json(grupo);
};

const crearGrupo = (req, res) => {
  const { nombre, materia, integrantes } = req.body;

  if (!nombre || !materia || !integrantes) {
    return res.status(400).json({
      mensaje: "Faltan campos obligatorios"
    });
  }

  const nuevoGrupo = {
    id: grupos.length + 1,
    nombre,
    materia,
    integrantes
  };

  grupos.push(nuevoGrupo);

  res.status(201).json(nuevoGrupo);
};

const actualizarGrupo = (req, res) => {
  const grupo = grupos.find(g => g.id == req.params.id);

  if (!grupo) {
    return res.status(404).json({
      mensaje: "Grupo no encontrado"
    });
  }

  const { nombre, materia, integrantes } = req.body;

  grupo.nombre = nombre;
  grupo.materia = materia;
  grupo.integrantes = integrantes;

  res.status(200).json(grupo);
};

const eliminarGrupo = (req, res) => {
  const index = grupos.findIndex(g => g.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({
      mensaje: "Grupo no encontrado"
    });
  }

  grupos.splice(index, 1);

  res.status(200).json({
    mensaje: "Grupo eliminado"
  });
};

module.exports = {
  obtenerGrupos,
  obtenerGrupoPorId,
  crearGrupo,
  actualizarGrupo,
  eliminarGrupo
};