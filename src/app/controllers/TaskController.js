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
}

export default new TaskController();
