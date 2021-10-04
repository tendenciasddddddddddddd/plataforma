"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdmin = exports.createRoles = void 0;

var _Role = _interopRequireDefault(require("../models/Role"));

var _User = _interopRequireDefault(require("../models/User"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    try {
      // Count Documents
      var count = yield _Role.default.estimatedDocumentCount(); // check for existing roles

      if (count > 0) return; // Create default Roles

      var values = yield Promise.all([new _Role.default({
        name: "Estudiante"
      }).save(), //user
      new _Role.default({
        name: "Docente"
      }).save(), //moderator
      new _Role.default({
        name: "Admin"
      }).save(), //admin
      new _Role.default({
        name: "Secretario"
      }).save(), //-------+++
      new _Role.default({
        name: "Vicerrector"
      }).save(), //-------+++
      new _Role.default({
        name: "Inpector"
      }).save() //-------+++
      ]);
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  });

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;

var createAdmin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* () {
    // check for an existing admin user
    var user = yield _User.default.findOne({
      email: "10004095632w@gmailcom"
    }); // get roles _id

    var roles = yield _Role.default.find({
      name: {
        $in: ["Admin"]
      }
    });

    if (!user) {
      // create a new admin user
      yield _User.default.create({
        username: "admin",
        email: "10004095632w@gmail.com",
        password: yield _bcryptjs.default.hash("Imperio 789.", 10),
        roles: roles.map(role => role._id),
        //****APARTIR DE A1QUI LOS NUEVOS DATOS
        nombres: "Esteban Wladimir",
        apellidos: "Martinez Martinez",
        fullname: "Martinez Martinez Esteban Wladimir",
        cedula: "1004095632",
        foto: "https://res.cloudinary.com/stebann/image/upload/v1631310792/profile_b9t64l.png",
        status: "Activo",
        telefono: "0995283857"
      });
      console.log('Admin User Created!');
    }
  });

  return function createAdmin() {
    return _ref2.apply(this, arguments);
  };
}();

exports.createAdmin = createAdmin;