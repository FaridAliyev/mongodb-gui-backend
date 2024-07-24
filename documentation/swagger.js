const commonSwagger = require("./commonSwagger");
const documentSwagger = require("./documentSwagger");

module.exports = {
  openapi: "3.0.0",
  info: {
    title: "MongoUI",
    version: "1.0.0",
    description: "Documentation for MongoUI API",
  },
  components: {
    securitySchemes: {
      Authorization: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        value: "Bearer <JWT token here>",
      },
    },
  },
  paths: {
    ...commonSwagger.paths, // Import annotations for common routes
    ...documentSwagger.paths, // Import annotations for document routes
  },
};
