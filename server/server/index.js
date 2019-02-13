const Express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const helmet = require('helmet');
const os = require('os');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
//const swaggerify = require('../swagger');
const routes = require('./routes');
const addRequestId = require('express-request-id')();
const logger = require('../lib/logger');
const io = require('socket.io')();

const app = new Express();

class ExpressServer {
  constructor() {
    app.use(morgan('tiny'));
    const root = path.normalize(`${__dirname}/..`);
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(addRequestId);
    // app.use(session({
    //   secret: process.env.SESSION_SECRET,
    //   resave: true,
    //   saveUninitialized: true
    // }));
    app.use(cors());
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      // Request methods you wish to allow
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, multipart/form-data");
      next();
    });
    app.use(helmet());
    app.use(function (req, res, next) {
      var log = logger.loggerInstance.child({
        id: req.id,
        body: req.body
      }, false);
      console.log("Request body : ", log.fields.body);
      //log.info({req: req});
      next();
    });
    app.use(function (req, res, next) {
      function afterResponse() {
        res.removeListener('finish', afterResponse);
        res.removeListener('close', afterResponse);
        var log = logger.loggerInstance.child({
          id: req.id
        }, true)
        //log.info({ res: res }, 'response')
      }
      res.on('finish', afterResponse);
      res.on('close', afterResponse);
      next();
    });
    app.use(Express.static(`${root}/public`));
    app.use(function (req, res, next) {
      req.io = io;
      next();
    });
    // initialize all routes
    routes(app);
    app.use(this.errHandlerMiddleware);
  }

  router(routes) {
    //swaggerify(app, routes);
    return this;
  }

  errHandlerMiddleware(err, req, res, next) {
    if (err && err.isJoi) {
      console.log(err);
      res.send({ status: 0, code: 404, message: err.details && err.details[0].message, err: err });
    } else {
      res.send({ status: 0, code: 404, message: err.message, err: err });
    }
  }

  connection() {
    require('./dbconnection');
    //require('./bootstrap').addAdmins();
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () => console.log(`App is up and running in ${process.env.NODE_ENV || 'local'} @: ${os.hostname()} on port: ${p}`);
    let server = http.createServer(app).listen(port, welcome(port));
    // let socketIO = io.attach(server)
    // require('./socket')(socketIO);
    return app;
  }
}
module.exports = ExpressServer;