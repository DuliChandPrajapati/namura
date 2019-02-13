const dbConnect = require('../../server/dbconnection');
const commonUtlility = require('../../lib/util');
const _ = require('underscore');
const config = require('config');
var bcrypt = require('bcrypt');

class UserService {
    
    
    createUser(payload) {
        var today = new Date();
        payload.password =  bcrypt.hashSync(payload.password,6);
        payload.created_at = commonUtlility.getCurrentTimeStamp();
        payload.modified_at = commonUtlility.getCurrentTimeStamp();
        payload.is_deleted = "N";
        //payload.role = parseInt(payload.role);
        
        // for (var key in payload) {
        //     if (payload.hasOwnProperty(key)) {
        //         console.log(key + " -> " + payload[key]);
        //     }
        // }

        let sqlQuery = `INSERT INTO ${config.userTable} SET ?`;

        return new Promise(function(resolve, reject){
            dbConnect.query(sqlQuery, payload, function(err, record, fields){
                if (err) reject(err);
                resolve( record  );
            });
        });
    }

    usersCountByEmail( arrOfObjs ){
        let arrOfVals = Object.values(arrOfObjs);

        let sqlQuery = `SELECT COUNT(id) as rcnt FROM ${config.userTable} WHERE email = ? LIMIT 1`;

        return new Promise(function(resolve, reject){
            dbConnect.query(sqlQuery, arrOfVals, function(err, records, fields){
                if (err) reject(err);
                resolve( records  );
            });
        });
     }

}

module.exports = new UserService();
