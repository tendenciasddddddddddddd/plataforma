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
  fdocente: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  doc: String,
  nombre: String,
  materia: String,
  codigo: String,
  descripcion: String,
  icono: String,
  estudiantes: [{
    usuario: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    name: String,
    email: String
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Aulavirtual", nivelSchema);

exports.default = _default;