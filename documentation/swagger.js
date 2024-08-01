const databaseSwagger = require("./databaseSwagger");
const collectionSwagger = require("./collectionSwagger");
const documentSwagger = require("./documentSwagger");

module.exports = {
  openapi: "3.0.0",
  info: {
    title: "MongoUI",
    version: "1.0.0",
    description: "Documentation for MongoDB GUI API",
  },
  paths: {
    ...databaseSwagger.paths, // Import annotations for database routes
    ...collectionSwagger.paths, // Import annotations for collection routes
    ...documentSwagger.paths, // Import annotations for document routes
  },
};
