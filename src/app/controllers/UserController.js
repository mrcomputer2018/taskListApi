import User from '../models/User';

class UserController {
    // eslint-disable-next-line consistent-return
    async store(req, res) {
        try {
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
            console.log({ error: error.message });
        }
    }
}

export default new UserController();
