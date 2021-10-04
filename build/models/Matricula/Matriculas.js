"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var nivelSchema = new _mongoose.Schema({
  fecha: {
    type: String,
    required: true
  },
  fkestudiante: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  fknivel: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Nivel"
  },
  academico: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Academicos"
  },
  nmatricula: Number,
  folio: Number,
  curso: String,
  estado: String,
  typo: String,
  //-------------------CALIFICACIONES
  notas: [{
    materia: String,
    docente: String,
    quimestre: String,
    aporte11: String,
    aporte12: String,
    aporte13: String,
    aporte14: String,
    aporte15: String,
    aporte21: String,
    aporte22: String,
    aporte23: String,
    aporte24: String,
    aporte25: String,
    aporte31: String,
    aporte32: String,
    aporte33: String,
    aporte34: String,
    aporte35: String,
    examen: String,
    suma: String,
    promedio: String
  }],
  confirmar: [{
    materia: String,
    docente: String,
    promedio: String,
    texto: String
  }],
  asistencias: [{
    fecha: String,
    materia: String,
    isAsiste: String
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Matriculas", nivelSchema);

exports.default = _default;