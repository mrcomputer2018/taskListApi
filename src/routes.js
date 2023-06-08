import { Router } from 'express';

const routes = new Router();

routes.get('/teste', (req, res) => {
    res.json({ message: ' Ola mundo.' });
});

export default routes;
