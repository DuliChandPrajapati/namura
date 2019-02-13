const { userServices } = require('../api/services');
const { ADMIN } = require('../lib/data');

exports.addAdmins = async function() {
    try {
        let admins = await userServices.findUsers({
            email: { $in: [ ADMIN[0].email, ADMIN[1].email ,ADMIN[2].email ] }
        });
        if(admins && admins.length){
            console.log("admin already exist");
        }else{
           await userServices.createUser(ADMIN);
        }    
    } catch (err) {
        console.log(err);
    }
};
  
