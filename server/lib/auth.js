const jwt = require('jsonwebtoken');
const _ = require('underscore');

function verifyJWTToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err)
      }
      resolve(decodedToken)
    });
  });
}

function createJWToken(details) {
  if (typeof details !== 'object') {
    details = {}
  }
  if (!details.maxAge || typeof details.maxAge !== 'number') {
    details.maxAge = 360000
  }
  var token = jwt.sign(details.sessionData, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 60 * 60,
    algorithm: 'HS256'
  });
  return token;
}

function storeToken(token, userData) {
  client.set(data.token, JSON.stringify(data), function (err, reply) {
    if (err) {
      return next(new Error(err));
    }
    if (reply) {
      client.expire(data.token, TOKEN_EXPIRATION_SEC, function (err, reply) {
        if (err) {
          return next(new Error("Can not set the expire value for the token key"));
        }
        if (reply) {
          next();
        } else {
          return next(new Error('Expiration not set on redis'));
        }
      });
    }
    else {
      return next(new Error('Token not set in redis'));
    }
  });
}

function retrieveToken() {
  client.get(id, function (err, reply) {
    if (err) {
      return done(err, {
        "message": err
      });
    }
    if (_.isNull(reply)) {
      return done(new Error("token_invalid"), {
        "message": "Token doesn't exists, are you sure it hasn't expired or been revoked?"
      });
    } else {
      var data = JSON.parse(reply);
      debug("User data fetched from redis store for user: %s", data.username);

      if (_.isEqual(data.token, id)) {
        return done(null, data);
      } else {
        return done(new Error("token_doesnt_exist"), {
          "message": "Token doesn't exists, login into the system so it can generate new token."
        });
      }

    }

  });
}

module.exports = {
  verifyJWTToken,
  createJWToken
}