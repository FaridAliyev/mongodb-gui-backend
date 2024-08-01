module.exports = {
  paths: {
    "/api/databases/{dbName}/collections": {
      get: {
        tags: ["Collections"],
        summary: "List all collections in the database",
        parameters: [
          {
            name: "dbName",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            description: "Name of the database",
          },
        ],
        responses: {
          200: {
            description: "A list of collections",
            content: {
              "application/json": {},
            },
          },
        },
      },
      post: {
        tags: ["Collections"],
        summary: "Create a new collection",
        parameters: [
          {
            name: "dbName",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            description: "Name of the database",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  collection: {
                    type: "string",
                  },
                },
                required: ["collection"],
              },
            },
          },
        },
        responses: {
          201: {
            description: "Collection created successfully",
          },
          400: {
            description: "Failed to create collection",
          },
        },
      },
    },
    "/api/databases/{dbName}/collections/{collectionName}/stats": {
      get: {
        tags: ["Collections"],
        summary: "Get collection statistics",
        parameters: [
          {
            name: "dbName",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            description: "Name of the database",
          },
          {
            name: "collectionName",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            description: "Name of the collection",
          },
        ],
        responses: {
          200: {
            description: "Collection statistics",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/api/databases/{dbName}/collections/delete": {
      delete: {
        tags: ["Collections"],
        summary: "Drop a collection",
        parameters: [
          {
            name: "dbName",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            description: "Name of the database",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  database: {
                    type: "string",
                  },
                  collection: {
                    type: "string",
                  },
                },
                required: ["dbName", "collectionName"],
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
  },
};
