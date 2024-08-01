require("dotenv").config();
const cors = require("cors");
const argv = require("minimist")(process.argv.slice(2));
const express = require("express");
const bodyParser = require("body-parser");
const gzipProcessor = require("connect-gzip-static");

const dataAccessAdapter = require("./db/dataAccessAdapter");
const databasesRoute = require("./routes/database");
const authMiddleware = require("./controllers/auth");

// initialize app
const app = express();

// middleware for simple authorization.
app.use(authMiddleware.auth);

app.use(express.static("public"));

// process gzipped static files. Bele papka yoxdur. Client terefdedir
//app.use(gzipProcessor(__dirname + "/public"));

// enables cors
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json({ limit: process.env.BODY_SIZE || "50mb" }));

// api routing
app.use("/api/databases", databasesRoute);

// Swagger
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = require("./documentation/swagger");

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: ["./routes/*.js"], // Specify the path to your route files
});

//Swagger UI route
app.use("/api/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// connect to database
dataAccessAdapter.InitDB(app);

// listen on :port once the app is connected to the MongoDB
app.once("connectedToDB", () => {
  const port = argv.p || process.env.PORT || (process.env.NODE_ENV === 'development' ? 4321 : 6060);
  app.listen(port, () => {
    console.log(`> Access Mongo GUI at http://localhost:${port}`);
  });
});

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  const error = {
    errmsg: err.errmsg,
    name: err.name,
  };
  return res.status(500).send(error);
});
