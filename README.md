# Express.js JSON Body Parsing Error with Empty or Invalid JSON

This repository demonstrates a common error in Express.js applications where JSON request bodies are not parsed correctly when they are empty or contain invalid JSON data.  The issue stems from the `express.json()` middleware's handling of malformed requests.  The provided solution addresses this by implementing custom middleware to handle these edge cases gracefully.

## Bug

The bug lies in the assumption that `req.body` will always be a valid JSON object.  If the request body is empty or contains invalid JSON, `express.json()` throws an error, causing the server to crash or return an error response.

## Solution

The solution involves creating custom middleware to explicitly check for empty or invalid JSON before attempting to parse the request body.  This way, the server can handle such requests without crashing and provide more informative error responses.