import express from 'express';
import morgan from 'morgan';
import useRouters from './routers/useRouters';
import cors from 'cors';

const app = express();

app.use(morgan('tiny'));
app.use(cors());
useRouters(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server: Listening on port ${port}`)
})
