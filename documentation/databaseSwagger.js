module.exports = {
  paths: {
    "/api/databases": {
      get: {
        tags: ["Databases"],
        summary: "List all databases",
        parameters: [
          {
            name: "includeCollections",
            in: "query",
            required: false,
            schema: {
              type: "boolean",
            },
            description: "Include collections in the response",
          },
        ],
        responses: {
          200: {
            description: "A list of databases",
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
    "/api/databases/{dbName}": {
      delete: {
        tags: ["Databases"],
        summary: "Drop a database",
        parameters: [
          {
            name: "dbName",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
            description: "Name of the database to drop",
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