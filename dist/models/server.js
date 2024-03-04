"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employer_1 = __importDefault(require("../routes/employer"));
const conection_1 = __importDefault(require("../db/conection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = '3001';
        this.listen();
        this.middleware();
        this.router();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion en puerto' + this.port);
        });
    }
    router() {
        this.app.use('/api/employers', employer_1.default);
    }
    middleware() {
        this.app.use(express_1.default.json());
    }
    dbConnect() {
        try {
            conection_1.default.authenticate().then();
            console.log('base de datos conectada');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = Server;
