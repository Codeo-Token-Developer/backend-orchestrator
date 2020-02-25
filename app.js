if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV === 'development') {
    require('dotenv').config();
};

//Dependecies;
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Port;
const PORT = process.env.PORT;
// const PORT = 3000

//Router;
const MainRouter = require('./routes');

//App-use;
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

//use Router;
app.use(MainRouter);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));




