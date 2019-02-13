const speakeasy = require("speakeasy");
const crypto = require('crypto');
//const handlebars = require('handlebars');
const pdf = require('html-pdf');
const CONSTANTS = require('./constant');
//const s3Upload = require('./aws');

class utilClass {
  constructor() { }

  getOTP() {
    const secret = speakeasy.generateSecret({ length: 20 });
    const token = speakeasy.totp({
      secret: secret.base32,
      encoding: CONSTANTS.OTP_PREFERENCES.ENCODING,
      digits: CONSTANTS.OTP_PREFERENCES.LENGTH,
      time: CONSTANTS.OTP_PREFERENCES.EXPIRE_IN_SECONDS
    });

    return {
      token,
      two_factor_temp_secret: secret.base32
    };
  }

  verifyOTP(token, secret) {
    const tokenValidates = speakeasy.totp.verify({
      secret: secret,
      encoding: CONSTANTS.OTP_PREFERENCES.ENCODING,
      digits: CONSTANTS.OTP_PREFERENCES.LENGTH,
      token: token,
      time: CONSTANTS.OTP_PREFERENCES.EXPIRE_IN_SECONDS
    });
    return tokenValidates;
  }

  encrypt(data) {
    var cipher = crypto.createCipher('aes-256-cbc', process.env.SECRET_KET);
    var crypted = cipher.update(data, 'utf-8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  }

  decrypt(data) {
    var decipher = crypto.createDecipher('aes-256-cbc', process.env.SECRET_KET);
    var decrypted = decipher.update(data, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
  }

  createPdf(htmlTemplate, templateData, filename, filelocation) {
    return new Promise((resolve, reject) => {
      let template = handlebars.compile((htmlTemplate).toString());
      let html = template(templateData);
      let options = { format: 'Letter' };
      //let filepath = `./dump/${filename}.pdf`;
      pdf.create(html, options, async function (err, res) {
        if (err) return reject(err);
        let obj = {
          path: res.filename,
          name: `${filename}.pdf`
        }
        let url = await s3Upload.uploadFile(obj, filelocation)
        return resolve(url);
      });
    });
  }


  getCurrentTimeStamp(){
    var today = new Date();
    var dd = today.getDate();
    var mm =  (today.getMonth()+1);
    var yy = today.getFullYear();
    var hh = today.getHours();
    var ii = today.getMinutes();
    var ss = today.getSeconds();
    var dateTime;
    if(dd < 10){
      dd = `0${dd}`;
    } 
  
    if(mm < 10){
      mm=`0${mm}`;
    }
  
    if(hh < 10){
      hh = `0${hh}`;
    }
  
    if(ii < 10){
      ii = `0${ii}`;
    }
  
    if(ss < 10){
      ss = `0${ss}`;
    }
  
  
  
  
    var date = yy +'-'+ mm +'-'+ dd;
    var time = hh +":"+ ii +":"+ ss;
    return dateTime = date+' '+time;
  }


}

module.exports = new utilClass();