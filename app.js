const express = require('express');
const app = express();

const dotenv = require('dotenv');
const db = require('./config/connection');
app.use(express.static('public'));
app.use(express.json());

app.set("view engine", "ejs");


dotenv.config();


// Import routes
const bookRoutes = require('./routes/booksRouter');
const userRoutes = require('./routes/userRouter');
const transactionRoutes = require('./routes/transactionRouter');

// Connect to MongoDB
db.connect((err) => {
    if (err) console.log("connection error" + err);
    else console.log("database connected to port 27017");
  });

// Routes
app.use('/home', (req,res)=>{
  res.render('home')
})
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
