const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API for MultiDictionary project",
      version: "1.0.0",
      description: "This is a REST API application made with Express.",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "me:)",
        url: "",
      },
    },
  },
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);

const router = express.Router();

// swagger json docs
router.get("/json", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// swagger UI page
router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;
