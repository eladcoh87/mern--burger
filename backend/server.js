import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import { notFound } from './middleware/errorMiddleware.js';
import { errorHandler } from './middleware/errorMiddleware.js';


dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors());



//! routes  :

app.use('/api/products',productRoutes)

//! routes end

app.use(notFound);

app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));