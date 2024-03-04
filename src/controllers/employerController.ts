import { Request, Response, response } from "express"
import employer from "../models/employer"

export const getEmployers = (req:Request, res:Response) => {
    employer.findAll()
    .then(response => {
        res.json(response)
    })
}

export const getEmployer = (req:Request, res:Response) => {
    const { id } = req.params
    employer.findByPk(id)
    .then(response => {
        if (response) {
            res.json(response)
        } else {
            res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            })
        }
    })
}

export const deleteEmployer = (req:Request, res:Response) => {
    const { id } = req.params
    employer.findByPk(id)
    .then(response => {
        if (response) {
            response.destroy()
            res.json({
                msg: "El empleado se eliminó con exito" 
            })
        } else {
            res.status(404).json({
                msg: `No existe un empleado con el id ${id}`
            })
        }
    })
}

export const postEmployer = (req:Request, res:Response) => {
    const {body} = req
    employer.create(body)
    .then(response => {
        if (response) {
            res.json({
                msg: "El empleado se ha agregado con éxito"
            })
        } else {
            res.json({
                msg: "El empleado no se ha podido agregar"
            })
        }
    })
    .catch (error => {
        res.json({
            msg: "Ha ocurrido un error"
        })
    })
}

export const putEmployer = (req:Request, res:Response) => {
    const {id} = req.params
    const {body} = req
    employer.findByPk(id)
    .then(response => {
        if (response) {
            response.update(body)
            res.json({
                msg: "El empleado se actualizó con exito"
            })
        } else {
            res.json({
                msg: `No existe un empleado con el id ${id}`
            })
        }
    })
    .catch ( error => {
        res.json({
            msg: "Ha ocurrido un error al eliminar al empleado"
        })
    })
}