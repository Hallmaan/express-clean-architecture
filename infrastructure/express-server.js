const express = require('express');

const app = express();

class ExpressServer {
  constructor(options) {
    this.webserverInterface = options.WebServerInterface;
    this.searchInterface = options.SearchInterface;
  }
  static toString() {
    return 'Express Server';
  }

  start() {

    app.use(function(req, res, next) {
      for (var key in req.query)
      { 
        req.query[key.toLowerCase()] = req.query[key];
      }
      next();
    });

    app.get('/', (req, res) => {
      res.type('application/json');
      res.status(200).send(this.webserverInterface.displayApiVersion());
    });

    app.get('/searchApi', async (req, res) => {
      const fetch = await this.searchInterface.searchApi(req.query);
      res.type('application/json');
      res.status(fetch.status).send(fetch)
    });

    app.set('case sensitive routing', true);

    const API_PORT = process.env.PORT || 3001
    app.listen(API_PORT, () => {
      console.log('listening on port 3000!');
    });
  }
}

module.exports = ExpressServer;