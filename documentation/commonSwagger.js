module.exports = {
  paths: {
    "/api/{dbName}/stats": {
      get: {
        tags: ["Database"],
        summary: "Get statistics for the specified database",
        description: "Retrieve statistics for a specific database collection.",
        parameters: [
          {
            in: "path",
            name: "dbName",
            required: true,
            description: "The name of the database",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
          },
          400: {
            description: "Invalid database name",
          },
        },
      },
    },
    "/api/{dbName}/documents": {
      get: {
        tags: ["Database"],
        summary: "Get documents from a specified collection",
        description:
          "Retrieve all documents from a specific collection within the database.",
        parameters: [
          {
            in: "path",
            name: "dbName",
            required: true,
            description: "The name of the database",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "collectionName",
            required: true,
            description: "The name of the collection",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
          },
          400: {
            description: "Invalid collection name",
          },
        },
      },
    },
    "/api": {
      get: {
        tags: ["Database"],
        summary: "List all collections",
        description:
          "Retrieve a list of all collections available in the specified database.",
        responses: {
          200: {
            description: "Success",
          },
          400: {
            description: "Failed to retrieve collections",
          },
        },
      },
      post: {
        tags: ["Database"],
        summary: "Create a new collection",
        description: "Create a new collection in the specified database.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  database: {
                    type: "string",
                    description: "The name of the database",
                  },
                  collection: {
                    type: "string",
                    description: "The name of the new collection",
                  },
                },
                required: ["database", "collection"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Collection created successfully",
          },
          400: {
            description: "Failed to create collection",
          },
        },
      },
    },
    "/api/delete": {
      post: {
        tags: ["Database"],
        summary: "Drop a collection",
        description: "Drop a collection from the specified database.",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  database: {
                    type: "string",
                    description: "The name of the database",
                  },
                  collection: {
                    type: "string",
                    description: "The name of the collection to be dropped",
                  },
                },
                required: ["database", "collection"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Collection dropped successfully",
          },
          400: {
            description: "Failed to drop collection",
          },
        },
      },
    },
    "/api/{dbName}/dropDB": {
      post: {
        tags: ["Database"],
        summary: "Drop a database",
        description: "Drop the specified database.",
        parameters: [
          {
            in: "path",
            name: "dbName",
            required: true,
            description: "The name of the database to be dropped",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Database dropped successfully",
          },
          400: {
            description: "Failed to drop database",
          },
        },
      },
    },
  },
};
