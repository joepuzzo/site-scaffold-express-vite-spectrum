import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';

import health from './routes/health.js';
import fail from './routes/fail.js';
import errorHandler from './middleware/errorHandler.js';
import proxy from './middleware/proxy.js';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createApp = ({ corsConfig }) => {
  console.log(`APP RUNNING IN ENVIRONMENT ${process.env.NODE_ENV}`);

  // Create Express application
  const app = express();

  // Health endpoint
  app.use(health);

  // Fail endpoints
  app.use('/fail', fail);

  // Apply CORS to the endpoints
  app.use(cors(corsConfig));

  // Route for static content
  if (process.env.NODE_ENV === 'development') {
    // Route for static content
    app.use('/static', express.static(path.join(__dirname, './static')));
    // Route to dev server when developing
    app.use('/*', proxy('http://localhost:9002'));
  } else {
    // Routes for static content
    app.use('/static', express.static(path.join(__dirname, './static')));
    app.use(express.static(path.join(__dirname, './web'), { redirect: false }));

    /* final catch-all route to index.html defined last */
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, './web/index.html'));
    });
  }

  // Add error handler
  app.use(errorHandler);

  return app;
};

export default createApp;
