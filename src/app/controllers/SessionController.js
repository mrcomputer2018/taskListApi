import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../models/User';

import authConfig from '../../config/auth';

dotenv.config();

class SessionController {
    // eslint-disable-next-line consistent-return
    async store(req, res) {
        try {
            // eslint-disable-next-line no-console
            console.log(`>>>> url: ${req.url}`);
            const { email } = req.body;
            const { password } = req.body;

            // verificando se este email existe
            const user = await User.findOne({
                // eslint-disable-next-line object-shorthand
                where: { email: email },
            });

            if (!user) {
                return res.status(401).json({ error: 'usuario não existe.' });
            }

            // verificando se este password não esta correto
            if (!(await user.checkPaswword(password))) {
                return res.status(401).json({ error: 'Senha incorreta.' });
            }

            const { id, name } = user;

            return res.json({
                user: {
                    id,
                    name,
                    email,
                },
                // payload - senha secreta - configuracoes
                token: jwt.sign({ id }, authConfig.secret, {
                    expiresIn: authConfig.expiresIn,
                }),
            });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log({ error: error.message });
        }
    }
}

export default new SessionController();
