
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';
import cors from 'cors';
import connectDB from "./config/database.js";
import setupSwagger from './utils/swagger.js';


const app = express();
const PORT = process.env.PORT||8080;

connectDB();
const isProduction = process.env.NODE_ENV === "production";

app.use(
    cors({
      origin: isProduction ? "http://localhost:3030" : "http://localhost:8080",
      credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);

setupSwagger(app);
app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
export default app 