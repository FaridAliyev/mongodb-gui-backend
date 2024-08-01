module.exports = {
  paths: {
    "/api/databases/{dbName}/collections/{collectionName}/documents": {
      get: {
        tags: ["Documents"],
        summary: "Retrieve all documents from a collection",
        description:
          "Retrieve all documents from a specified collection within a database.",
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
            in: "path",
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
            description: "Failed to retrieve documents",
          },
        },
      },
      post: {
        tags: ["Documents"],
        summary: "Insert or update documents in bulk",
        description:
          "Insert or update multiple documents in a specified collection.",
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
            in: "path",
            name: "collectionName",
            required: true,
            description: "The name of the collection",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Documents inserted or updated successfully",
          },
          400: {
            description: "Failed to insert or update documents",
          },
        },
      },
      put: {
        tags: ["Documents"],
        summary: "Replace a document",
        description:
          "Replace a document in the specified collection by its ID.",
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
            in: "path",
            name: "collectionName",
            required: true,
            description: "The name of the collection",
            schema: {
              type: "string",
            },
          },
          {
            in: "query",
            name: "documentId",
            required: true,
            description: "The ID of the document to replace",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Document replaced successfully",
          },
          400: {
            description: "Failed to replace document",
          },
        },
      },
    },
    "/api/databases/{dbName}/collections/{collectionName}/documents/filter": {
      post: {
        tags: ["Documents"],
        summary: "Filter documents",
        description:
          "Filter documents in a specified collection based on a query.",
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
            in: "path",
            name: "collectionName",
            required: true,
            description: "The name of the collection",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Documents filtered successfully",
          },
          400: {
            description: "Failed to filter documents",
          },
        },
      },
    },
    "/api/databases/{dbName}/collections/{collectionName}/documents/count": {
      post: {
        tags: ["Documents"],
        summary: "Count documents",
        description:
          "Count documents in a specified collection based on a query.",
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
            in: "path",
            name: "collectionName",
            required: true,
            description: "The name of the collection",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Document count retrieved successfully",
          },
          400: {
            description: "Failed to count documents",
          },
        },
      },
    },
    "/api/databases/{dbName}/collections/{collectionName}/documents/delete": {
      delete: {
        tags: ["Documents"],
        summary: "Delete a document",
        description: "Delete a document from a specified collection by its ID.",
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
            in: "path",
            name: "collectionName",
            required: true,
            description: "The name of the collection",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Document deleted successfully",
          },
          400: {
            description: "Failed to delete document",
          },
        },
      },
    },
    "/api/databases/{dbName}/collections/{collectionName}/documents/aggregate": {
      post: {
        tags: ["Documents"],
        summary: "Aggregate documents",
        description:
          "Aggregate documents in a specified collection based on a pipeline.",
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
            in: "path",
            name: "collectionName",
            required: true,
            description: "The name of the collection",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Documents aggregated successfully",
          },
          400: {
            description: "Failed to aggregate documents",
          },
        },
      },
    },
    "/api/databases/{dbName}/collections/{collectionName}/documents/generate-query": {
      post: {
        tags: ["Documents"],
        summary: "Generate query from prompt",
        description: "Generate a query based on a user-provided prompt.",
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
            in: "path",
            name: "collectionName",
            required: true,
            description: "The name of the collection",
            schema: {
              type: "string",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  prompt: {
                    type: "string",
                    description:
                      "The user-provided prompt to generate the query",
                  },
                },
                required: ["prompt"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Query generated successfully",
          },
          400: {
            description: "Failed to generate query",
          },
        },
      },
    },
  },
};
