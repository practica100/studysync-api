const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/app");
const gruposRoutes = require("./routes/gruposRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customSiteTitle: "StudySync API Docs",
  swaggerOptions: { persistAuthorization: true }
}));

app.use("/api/grupos", gruposRoutes);

app.use(errorHandler);

module.exports = app;