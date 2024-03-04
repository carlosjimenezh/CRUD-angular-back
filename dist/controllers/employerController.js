"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putEmployer = exports.postEmployer = exports.deleteEmployer = exports.getEmployer = exports.getEmployers = void 0;
const employer_1 = __importDefault(require("../models/employer"));
const getEmployers = (req, res) => {
    employer_1.default.findAll()
        .then(response => {
        res.json(response);
    });
};
exports.getEmployers = getEmployers;
const getEmployer = (req, res) => {
    const { id } = req.params;
    employer_1.default.findByPk(id)
        .then(response => {
        if (response) {
            res.json(response);
        }
        else {
            res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            });
        }
    });
};
exports.getEmployer = getEmployer;
const deleteEmployer = (req, res) => {
    const { id } = req.params;
    employer_1.default.findByPk(id)
        .then(response => {
        if (response) {
            response.destroy();
            res.json({
                msg: "El empleado se eliminó con exito"
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            });
        }
    });
};
exports.deleteEmployer = deleteEmployer;
const postEmployer = (req, res) => {
    const { body } = req;
    employer_1.default.create(body)
        .then(response => {
        if (response) {
            res.json({
                msg: "El empleado se ha agregado con éxito"
            });
        }
        else {
            res.json({
                msg: "El empleado no se ha podido agregar"
            });
        }
    })
        .catch(error => {
        res.json({
            msg: "Ha ocurrido un error"
        });
    });
};
exports.postEmployer = postEmployer;
const putEmployer = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    employer_1.default.findByPk(id)
        .then(response => {
        if (response) {
            response.update(body);
            res.json({
                msg: "El empleado se actualizó con exito"
            });
        }
        else {
            res.json({
                msg: `No existe un empleado con el id ${id}`
            });
        }
    })
        .catch(error => {
        res.json({
            msg: "Ha ocurrido un error al eliminar al empleado"
        });
    });
};
exports.putEmployer = putEmployer;
