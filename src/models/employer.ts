import { DataTypes } from "sequelize"
import db from "../db/conection"

const employer = db.define('employer', {
    nombre: {
        type: DataTypes.STRING
    },
    nacimiento: {
        type: DataTypes.DATE
    },
    edad: {
        type: DataTypes.NUMBER
    },
    idCargo: {
        type: DataTypes.NUMBER
    },
    activo: {
        type: DataTypes.BOOLEAN
    },
}, {
    createdAt: false,
    updatedAt: false
})

export default employer