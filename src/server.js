import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
