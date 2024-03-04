import express, { response } from "express";
import employerRoutes from "../routes/employer"
import db from "../db/conection"
import { json } from "sequelize";

class Server {
    private app: express.Application
    private port: string

    constructor () {
        this.app = express()
        this.port = '3001'
        this.listen()
        this.middleware()
        this.router()
        this.dbConnect()
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log('Aplicacion en puerto'+this.port)
        })
    }

    router () {
        this.app.use('/api/employers', employerRoutes)
    }

    middleware () {
        this.app.use(express.json())
    }

    dbConnect () {
        try {
            db.authenticate().then()
            console.log('base de datos conectada')
        } catch (error) {
            console.log(error)
        }
    }
}

export default Server;