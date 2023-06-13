import * as Yup from 'yup';
import Task from '../models/Task';

class TaskController {
    async index(req, res) {
        const tasks = await Task.findAll({
            where: { user_id: req.userId, check: false },
        });

        return res.json(tasks);
    }

    // eslint-disable-next-line consistent-return
    async store(req, res) {
        try {
            const schema = Yup.object().shape({
                task: Yup.string().required(),
            });

            if (!(await schema.isValid(req.body))) {
                return res
                    .status(400)
                    .json({ error: 'Este campo é obrigatorio.' });
            }

            const { task } = req.body;

            const tasks = await Task.create({
                user_id: req.userId,
                task,
            });

            return res.json(tasks);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log({ error: error.message });
        }
    }

    // eslint-disable-next-line consistent-return
    async update(req, res) {
        try {
            // nome dado na routes
            const { task_id } = req.params;

            const taskExists = await Task.findByPk(task_id);

            if (!taskExists) {
                return res
                    .status(400)
                    .json({ error: 'Esta tarefa não existe.' });
            }

            const task = await taskExists.update(req.body);

            return res.json(task);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log({ error: error.message });
        }
    }

    // eslint-disable-next-line consistent-return
    async delete(req, res) {
        try {
            const { task_id } = req.params;

            const taskExists = await Task.findByPk(task_id);

            if (!taskExists) {
                return res
                    .status(400)
                    .json({ error: 'Esta tarefa não existe.' });
            }

            if (taskExists.user_id !== req.userId) {
                return res
                    .status(401)
                    .json({ error: 'Requisição não autorizada.' });
            }

            await taskExists.destroy(task_id);

            return res.json({ message: 'Tarefa excluida com sucesso.' });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log({ error: error.message });
        }
    }
}

export default new TaskController();
