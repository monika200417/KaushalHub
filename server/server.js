const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/proposals", require("./routes/proposalRoutes"));

connectDB();


app.get("/", (req, res) => {
  res.send("KaushalHub backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
