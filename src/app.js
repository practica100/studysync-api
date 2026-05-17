const express = require("express");
const gruposRoutes = require("./routes/gruposRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use("/api/grupos", gruposRoutes);

app.use(errorHandler);

module.exports = app;