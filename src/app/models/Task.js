import Sequelize, { Model } from 'sequelize';

class Task extends Model {
    static init(sequelize) {
        super.init(
            {
                task: Sequelize.STRING,
                check: Sequelize.BOOLEAN,
            },
            {
                // conexao com o BD
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

export default Task;
