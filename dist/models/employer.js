"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../db/conection"));
const employer = conection_1.default.define('employer', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    nacimiento: {
        type: sequelize_1.DataTypes.DATE
    },
    edad: {
        type: sequelize_1.DataTypes.NUMBER
    },
    idCargo: {
        type: sequelize_1.DataTypes.NUMBER
    },
    activo: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = employer;
