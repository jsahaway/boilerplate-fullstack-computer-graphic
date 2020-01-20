import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { router } from './api';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;
const resolvers = {
  Query: { books: () => books },
};
const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = express();
server
  .disable('x-powered-by')
  .use(helmet())
  .use(cors())
  .use(bodyParser.json())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use('/graphql', graphqlExpress({ schema }))
  .use('/graphiql', graphiqlExpress({ endpointURL: '/api-graph' }))
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
