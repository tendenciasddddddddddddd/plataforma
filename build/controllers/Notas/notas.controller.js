"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMatriculasNotaById = exports.confirmarNoteById = exports.createNoteById = exports.getMatriculaAsistencia = exports.getMatriculaNota = void 0;

var _Matriculas = _interopRequireDefault(require("../../models/Matricula/Matriculas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getMatriculaNota = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var idCurso = req.query.curso;
    var paralelo = req.query.paralelo;
    var modalidad = req.query.modalidad;
    var distributivo = yield _Matriculas.default.find({
      fknivel: {
        $in: [idCurso]
      },
      curso: {
        $in: [paralelo]
      },
      typo: {
        $in: [modalidad]
      }
    }).populate('fkestudiante', 'nombres apellidos foto cedula');
    return res.json(distributivo);
  });

  return function getMatriculaNota(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMatriculaNota = getMatriculaNota;

var getMatriculaAsistencia = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var idCurso = req.query.curso;
    var paralelo = req.query.paralelo;
    var distributivo = yield _Matriculas.default.find({
      fknivel: {
        $in: [idCurso]
      },
      curso: {
        $in: [paralelo]
      }
    }, {
      'typo': true
    }).populate('fkestudiante', 'nombres apellidos foto cedula');
    return res.json(distributivo);
  });

  return function getMatriculaAsistencia(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMatriculaAsistencia = getMatriculaAsistencia;

var createNoteById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    yield _Matriculas.default.findByIdAndUpdate(req.params.matriculaId, {
      $push: {
        'notas': req.body.notas
      }
    }, {
      new: true
    });
    res.status(200).json('crearnote');
  });

  return function createNoteById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //confirmar notas de los dos parcilaes


exports.createNoteById = createNoteById;

var confirmarNoteById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    //console.log(req.body);
    var crearnote = yield _Matriculas.default.findByIdAndUpdate(req.params.matriculaId, {
      $push: {
        'confirmar': req.body.confirmar
      }
    }, {
      new: true
    });
    res.status(200).json('confnote');
  });

  return function confirmarNoteById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //FILTRO NOTAS DE ESTUDIANTES  


exports.confirmarNoteById = confirmarNoteById;

var getMatriculasNotaById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    try {
      var {
        matriculaId
      } = req.params;
      var matricula = yield _Matriculas.default.findOne({
        fkestudiante: matriculaId
      }).populate('fkestudiante', 'fullname').populate('fknivel', 'nombres').populate('academico', 'nombre');
      res.status(200).json(matricula);
    } catch (error) {
      res.status(500).json({
        message: "No mat found"
      });
    }
  });

  return function getMatriculasNotaById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getMatriculasNotaById = getMatriculasNotaById;