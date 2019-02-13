const dbConnect = require('../../../server/dbconnection');
const _ = require('underscore');
const { userServices } = require('../../services/index');
const jwtToken = require('../../../lib/auth');
//const { EMAIL, USER_TYPE, POST, PUSH_TYPE } = require('../../../lib/constant');
const { SUCCESS_MESSAGE, ERROR_MESSAGE } = require('../../../lib/message');
const commonFunctions = require('../../../lib/common');
//const emailProvider = require('../../../lib/email-provider');
const logger = require('../../../lib/logger');
const customError = require('../../../lib/custom-error');
//const util = require('../../../lib/util');
//const { USER_PROFILE_PROJECTION } = require('../../../lib/projection');
//const notifications = require('../../../lib/notification');

class Controller {
    // {
    //     "id":1, 
    //     "firstname":"admin", 
    //     "lastname":"fullname", 
    //     "email":"email@email.com", 
    //      "username":"admin",
    //      "password":"Nomura@123"
    //     }

  async create(req, res, next) {
    try {
      let payload = req.body;
      let validateEmail = await commonFunctions.validateEmail(payload);

      if (validateEmail) {
        return next(new customError(ERROR_MESSAGE.EMAIL_EXIST));
      }
      let userTable = await userServices.createUser(payload);
      console.log("payload user", userTable);
      let {id,firstname, username, lastname, email, password,created_by, created_at,modified_by,modified_at,is_deleted } = userTable;
      let token = jwtToken.createJWToken({
        sessionData: {id, firstname, username, lastname, email },
        maxAge: 60 * 60 * 60 * 60
      });
      let data = {id,firstname, username, lastname, email, password,created_by, created_at, modified_by, modified_at, is_deleted };
      console.log("----------------------",data);
      res.send({ status: 1, code: 200, message: SUCCESS_MESSAGE.SIGNUP_SUCCESS, data });
    } catch (err) {
      res.send({ status: 0, code: 404, message: err.message, data: err.stack });
    }
  }

}
module.exports = new Controller();
