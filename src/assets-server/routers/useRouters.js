import { Router } from 'express';

export default app => {
    app.use('/api/v1', require('./api/v1/heightMapRouter').default);
}

