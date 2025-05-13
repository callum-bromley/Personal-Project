import * as Path from 'node:path';
import express from 'express';
import cors, { CorsOptions } from 'cors';

const server = express();

// API endpoint to serve a random greeting
server.get('/api/v1/greeting', (req, res) => {
  const greetings = ['hola', 'hi', 'hello', 'howdy'];
  const index = Math.floor(Math.random() * greetings.length);
  console.log(index);
  res.json({ greeting: greetings[index] });
});

// Middleware to parse JSON requests and handle CORS
server.use(express.json());

// Enable CORS for all domains in development, you can adjust this in production if necessary
server.use(cors('*' as CorsOptions));

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Serve static assets from the 'public' directory
  server.use(express.static(Path.resolve('public')));

  // Serve additional assets from the 'dist/assets' folder
  server.use('/assets', express.static(Path.resolve('dist/assets')));

  // Serve the main HTML file for all routes (important for single-page apps)
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('dist/index.html'));
  });
} else {
  // Optional: You can add any development-specific configurations here (e.g., logging, hot-reloading)
  console.log('Development mode: Static assets may be handled differently');
}

export default server;
