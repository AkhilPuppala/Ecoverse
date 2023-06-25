import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

connectDB();


app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/auth',authRoute);

app.get('/',(req,res) => {
    res.send("<h1>Welcome</h1>")
})

const port = 8080

app.listen(port,() => {
    console.log(`Server is running on ${port}`.bgCyan.white)
})