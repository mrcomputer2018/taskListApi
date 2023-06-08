import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT || 3333;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`listening on port ${port}`);
});
