const cors = require("cors");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const dotenv = require('dotenv');
dotenv.config();

const { authMiddleware } = require("./utils/auth.js");
const { typeDefs, resolvers } = require("./schema");
const db = require("./config/connection");


const PORT = process.env.PORT || 3001;
const app = express();
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    ...resolvers,
  },
  context: authMiddleware,
});

app.get('/api/google-maps-key', (req, res) => {
  console.log('Received request for Google Maps API key');
  const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Ensure this environment variable is set
  if (apiKey) {
    res.json({ apiKey }); // This automatically serializes the response as JSON
  } else {
    res.status(500).json({ error: 'API key not found' });
  }
});

app.use(cors({
  origin: 'http://localhost:3000', // Adjust this to match your React app's URL
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the Google Maps API key


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};



db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("We are connected to the database!");
  checkConnectionState();

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`Google Maps API Key: ${GOOGLE_MAPS_API_KEY}`); 
  });
});

function checkConnectionState() {
  switch (db.readyState) {
    case 0:
      console.log("Mongoose connection state: disconnected");
      break;
    case 1:
      console.log("Mongoose connection state: connected");
      break;
    case 2:
      console.log("Mongoose connection state: connecting");
      break;
    case 3:
      console.log("Mongoose connection state: disconnecting");
      break;
    default:
      console.log("Mongoose connection state: unknown");
      break;
  }
}

startApolloServer();

