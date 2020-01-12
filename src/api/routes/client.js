import { Router } from 'express';
import App from '../../app/App';
import { DataProvider } from '../../app/components/DataContext';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../common/theme';
import serialize from 'serialize-javascript'; // Safer stringify, prevents XSS attacks

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const router = Router();

router.get('*', (req, res) => {
  const { data } = req.app.inject;
  const context = {};
  const sheets = new ServerStyleSheets();
  const markup = renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </ThemeProvider>
    )
  );

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(
      `<!doctype html>
          <html lang="">
          <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charset="utf-8" />
            <title>A4C</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${
              assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''
            }
            ${
              process.env.NODE_ENV === 'production'
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${assets.client.js}" defer crossorigin></script>`
            }
            </head>
            <body>
              <div id="root">${markup}</div>
              <script>window.env = ${serialize({ data })}</script>
            </body>
        </html>`
    );
  }
});

export default router;
