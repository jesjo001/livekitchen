const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require("passport")

const usersRouter = require('./routes/users')
const productRouter = require('./routes/product')
const storeRouter = require('./routes/stores')
const loginRouter = require('./routes/login')

require('dotenv').config()

const app = express()

const port  = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true })

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Mongo database connection established successfully");
})
.catch((e) => console.log(e));


//Passport middleware iinit
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Routes
app.use('/users', usersRouter)
app.use('/stores', storeRouter)
app.use('/products', productRouter)
app.use('/', loginRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port} `);
}) 