import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
import studentRoutes from './routes/studentRoutes.js';
import authRoutes from './routes/authRoutes.js';
import {
  cloudinaryConfig,
  connectDb
} from './config/config.js';
import {
  errorMiddleware
} from './middleware/errorMiddleware.js';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import feeRoutes from './routes/feeRoutes.js'

connectDb();
cloudinaryConfig();
app.use(cookieParser());

// Allow all origins
app.use(cors({  origin: 'http://localhost:5173',  credentials: true,}));

app.use(bodyParser.json({
  limit: '10mb'
}));
app.use('/api', studentRoutes, authRoutes,feeRoutes);
app.use(errorMiddleware);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is listening on port ${process.env.SERVER_PORT}`);
});