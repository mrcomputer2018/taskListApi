import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const autnHeader = req.headers.authorization;

    if (!autnHeader) {
        return res.status(401).json({ error: 'Token não existe.' });
    }
    // Pegando somente o token
    const [, token] = autnHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        req.userId = decoded.id;

        return next();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log({ error: error.message });
        return res.status(401).json({ error: 'Token inválido.' });
    }
};
