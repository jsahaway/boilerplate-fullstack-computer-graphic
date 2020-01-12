import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { router } from './api';

const server = express();
server
  .disable('x-powered-by')
  .use(helmet())
  .use(cors())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  // .use('/opencv', router.opencv)
  .use((req, res, next) => {
    req.app.inject = {};
    req.app.inject.data = { name: 'home' };
    next();
  })
  .use('/about', (req, res, next) => {
    req.app.inject.data = { name: 'about' };
    next();
  })
  .use('*', router.client)
  .use((error, req, res, next) => {
    console.error('\x1b[40m%s\x1b[0m', error);
    res.status(500).send({
      message: error.message,
      error,
    });
  });

export default server;
