import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Task from '../app/models/Task';

const models = [User, Task];

class Database {
    constructor() {
        this.init();
    }

    // conexao do BD com os models
    init() {
        this.connection = new Sequelize(databaseConfig);

        // fazendoa conexao e carregando model
        models
            .map((model) => model.init(this.connection))
            .map(
                (model) =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
