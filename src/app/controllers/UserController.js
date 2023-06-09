import * as Yup from 'yup';
import User from '../models/User';

class UserController {
    // eslint-disable-next-line consistent-return
    async store(req, res) {
        try {
            // eslint-disable-next-line no-console
            console.log(`>>>> POST url: ${req.url}`);

            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                password: Yup.string().required().min(6),
            });

            if (!(await schema.isValid(req.body))) {
                res.status(400).json({ error: 'Falha na validação.' });
            }

            const userExists = await User.findOne({
                where: { email: req.body.email },
            });

            if (userExists) {
                return res.status(400).json({ error: 'Usuario já existe.' });
            }

            // desconstruindo para devolver somente o necessario
            const { id, name, email } = await User.create(req.body);

            return res.json({ id, name, email });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log({ error: error.message });
        }
    }

    // eslint-disable-next-line consistent-return
    async update(req, res) {
        try {
            // eslint-disable-next-line no-console
            console.log(`>>>> PUT url: ${req.url}`);

            const schema = Yup.object().shape({
                name: Yup.string(),
                email: Yup.string().email(),
                oldPassword: Yup.string().min(6),
                password: Yup.string()
                    .min(6)
                    .when('oldPassword', (oldPassword, field) =>
                        oldPassword ? field.required() : field
                    ),
                confirmPassword: Yup.string().when(
                    'password',
                    (password, field) =>
                        password
                            ? field.required().oneOf([Yup.ref('password')])
                            : field
                ),
            });

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Falha na validação.' });
            }

            const { email } = req.body;
            const { oldPassword } = req.body;

            const user = await User.findByPk(req.userId);

            if (!user) {
                return res
                    .status(401)
                    .json({ error: 'Usuario não encontrado.' });
            }

            // verificando se ja tem o email cadastrado no banco
            if (email !== user.email) {
                const userExists = await User.findOne({
                    where: { email },
                });

                if (userExists) {
                    return res.status(400).json({ error: 'Email já existe.' });
                }
            }

            // verificando senha antiga
            if (oldPassword && !(await user.checkPassword(oldPassword))) {
                return res.status(401).json({ error: 'Senha incorreta.' });
            }

            // atualizando cadastro com todas as informaoes do body
            const { id, name } = await user.update(req.body);

            return res.json({ id, name, email });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log({ error: error.message });
        }
    }
}

export default new UserController();
