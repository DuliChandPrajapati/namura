const jwtToken = require('../lib/auth');

exports.verifyJWT_MW = function (req, res, next) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    let token = req.headers.authorization.split(' ')[1];
    jwtToken.verifyJWTToken(token)
      .then((decodedToken) => {
        req.user = decodedToken;
        next();
      })
      .catch((err) => {
        res.send({status:0 ,code:404, message: "Invalid Authorization." });
      })
  } else {
    req.user = undefined;
    res.send({status:0, code:404, message: "Invalid Authorization." });
  }

}

exports.requireRole = function(role){
  return function(req, res, next) {
    if(role === 2){
      return next();
    }
    if(req.user && req.user.userType === role)
      next();
    else
      res.json({status:0,code:403,message:"Not Authorized."});
  }
}