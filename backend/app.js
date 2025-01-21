const express = require('express');
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandlerMiddleware');
const categoryRouter = require('./routes/categoryRouter');
const transactionRouter = require('./routes/transactionRouter');
const app = express();

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/mern-tracker").then(() => console.log("Connected to MongoDB")).catch((err) => console.log(err))
const corsOptions={
  origin: "http://localhost:5173"
}
app.use(cors(corsOptions))

//!middleware
app.use(express.json())

//!routes
app.use("/", userRouter)
app.use("/", categoryRouter)
app.use("/", transactionRouter)

//!error handler
app.use(errorHandler )


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
  console.log(`Server is running on port...${PORT}`)
);