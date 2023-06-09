import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    // conexao do BD com os models
    init() {
        this.connection = new Sequelize(databaseConfig);

        // fazendoa conexao e carregando model
        models.map((model) => model.init(this.connection));
    }
}

export default new Database();
