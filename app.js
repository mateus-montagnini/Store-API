// 'g  G  h  H ""'
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const PORT = process.env.PORT

const connectDB = require('./db/connect');
const productsRouter = require('./routes/productsRoute');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

//db connection
connectDB();

// middleware
app.use(express.json());

// routes

app.get('/', (req, res) => {
    res.send('<1>Store API</1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products', productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);


app.listen(PORT, () => console.log(`Listenin on port: ${PORT}`))
