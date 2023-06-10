import dotenv from 'dotenv';

dotenv.config();

export default {
    secret: process.env.MD5,
    expiresIn: '7d',
};
