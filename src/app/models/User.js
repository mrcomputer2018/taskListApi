import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init(
            // campos que usuario vai mandar
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default User;
