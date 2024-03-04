import { Sequelize } from "sequelize";

const sequelize = new Sequelize('crud_angular', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
});

export default sequelize;