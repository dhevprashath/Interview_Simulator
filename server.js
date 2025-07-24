const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors")

connectDb();
const app = express();

const port = 3000;

app.use(express.json());
app.use(cors())
app.use("/auth", require("./routes/authRoutes"))
app.use("/interview", require("./routes/interviewRoutes"))
// app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});