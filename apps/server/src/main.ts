/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import cors from 'cors';
import { createApolloServer } from './config/apollo';
import { authMiddleware } from './middlewares/authMiddleware';
import { connectDatabase } from './config/db';

async function startServer() {
  const app = express();

  // Connect to MongoDB
  await connectDatabase();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Create and apply Apollo Server
  const { middleware: apolloMiddleware } = await createApolloServer();

  // Apply authentication middleware to GraphQL endpoint
  app.use('/graphql', authMiddleware, apolloMiddleware);

  const port = process.env.PORT || 3333;
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
  });
}

startServer().catch((err) => console.error('Error starting server:', err));
