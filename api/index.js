
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");


const userRoutes = require("./routes/userRoutes");

mongoose.connect('mongodb+srv://admin:admin@cluster0.0ej3f.mongodb.net/twitter?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to Database`));



app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())


// app.use("/api/users", userRoutes);


app.listen(PORT, () => console.log(`Server running at port ${PORT}`))

