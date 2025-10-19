const express = require("express");
const usersRoutes = require("./routes/users");
const swagger = require("./utils/swagger.js");

const app = express();

app.use("/users", usersRoutes);
app.use("/docs", swagger);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
