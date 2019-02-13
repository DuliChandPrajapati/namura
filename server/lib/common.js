const _ = require('underscore');
const { userServices } = require('../api/services');
const { USER_PROFILE_PROJECTION } = require('./projection');
const { PUSH_TYPE } = require('./constant');
const promise = require('./catchPromise');
const notifications = require('./notification');

class CommonFunctions {

  async validateEmail(payload) {
    try {
      let query = {};
      if (payload.email) {
        query = {
          email: payload.email
        }
      } else if (payload.token) {
        query = {
          "resetPassword.token": payload.token
        }
      }
      let resultSet = await userServices.usersCountByEmail(query);
      let usersCountByEmail = resultSet[0].rcnt;
      return resultSet[0].rcnt;
    } catch (err) {
      throw new Error(err);
    }

  }
}

module.exports = new CommonFunctions();