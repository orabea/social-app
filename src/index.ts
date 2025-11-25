import express from 'express';
import { bootstap } from './app.controller.js';
import { config } from 'dotenv';
config({ path: './config/dev.env' });
const app = express();
const port = 3000;
bootstap(app , express)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});