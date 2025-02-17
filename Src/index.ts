import express, { Request, Response } from 'express';
import userRouter from './routes/userRouter';
import adminRouter from './routes/adminRoutes';
import carRouter from './routes/carRouter';
const port = 8050;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',[userRouter,adminRouter,carRouter]);

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});

export default app;
