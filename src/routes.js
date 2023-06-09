import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/teste', async (req, res) => {
    try {
        const user = await User.create({
            name: 'marcelo ribeiro',
            email: 'marcelo@marcelo.com',
            password_hash: '123123',
        });

        res.json(user);
    } catch (error) {
        console.log({ error: error.message });
    }
});

export default routes;
