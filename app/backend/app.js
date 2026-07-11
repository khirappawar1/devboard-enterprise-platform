const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", require("./routes/health"));
app.use("/pods", require("./routes/pods"));
app.use("/deployments", require("./routes/deployments"));
app.use("/nodes", require("./routes/nodes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});