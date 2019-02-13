const Joi = require('joi');
const _ = require('underscore');
const CONSTANTS = require('../../../lib/constant');

class UserValidations{
    constructor(){
        // this.emailLogin = this.emailLogin.bind(this);
    }

    create(req,res,next){
        const schema = Joi.object().keys({
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            username: Joi.string().required(),
            email: Joi.string().email().required() ,
            password: Joi.string().regex(/^[a-zA-Z0-9]{6,15}$/).required(),
            created_by:Joi.string(),
            modified_by:Joi.string()
        }); 
        Joi.validate(req.body, schema, function (err, value) {
            if(err){
                next(err);
            }else{
                next();
            }
         });        
    }

    login(req,res,next){
        let loginObj = _.pick(req.body, 'email','password');
        const schema = Joi.object().keys({
            password: Joi.string().required(),
            email: Joi.string().email().required()
        }); 
        Joi.validate(loginObj, schema, function (err, value) {
            if(err){
                next(err);
            }else{
                next();
            }
        });        
    }

    resetPassword(req,res,next){
        const schema = Joi.object().keys({
            email:Joi.string().email().required(),
            verificationCode: Joi.string().required(),
            password: Joi.string().required()
        }); 
        Joi.validate(req.body, schema, function (err, value) {
            if(err){
                next(err);
            }else{
                next();
            }
        });        
    }

    changePassword(req,res,next){
        const schema = Joi.object().keys({
            oldPassword: Joi.string().required(),
            newPassword: Joi.string().required()
        }); 
        Joi.validate(req.body, schema, function (err, value) {
            if(err){
                next(err);
            }else{
                next();
            }
        });        
    }

    forgotPassword(req,res,next){
        const schema = Joi.object().keys({
            email: Joi.string().email().required()
        }); 
        Joi.validate(req.body, schema, function (err, value) {
            if(err){
                next(err);
            }else{
                next();
            }
        });        
    }

    updateProfile(req,res,next){
        const schema = Joi.object().keys({
            firstName:Joi.string().required(),
            lastName:Joi.string().required(),
            mobile:Joi.string().required(),
            countryCode:Joi.string().required(),
            countryShortCode:Joi.string().allow('').optional(),
            email:Joi.string().email().required(),
            profileImage:Joi.string().allow('').optional(),
            gender:Joi.number().integer().valid([CONSTANTS.GENDER.MALE,CONSTANTS.GENDER.FEMALE]).required(),
            dob:Joi.number().required(),
            bodyType:Joi.number().integer().required(),
            nationality:Joi.number().integer().optional(),
            anniversary:Joi.number().optional(),
            hometown:Joi.string().optional(),
            culturalBackground:Joi.number().integer().optional(),
            address:Joi.string().optional(),
            longitude:Joi.number().min(-180).max(180),
            latitude:Joi.number().min(-90).max(90),
            dressingStyle:Joi.number().integer(),
            occasion:Joi.number().integer()
        });
        Joi.validate(req.body, schema, function (err, value) {
            if(err){
                next(err);
            }else{
                next();
            }
        });
    }

    follow(req,res,next){
        const schema = Joi.object().keys({
            followingId: Joi.string().required(),
            isFollowed:Joi.boolean().required().default(true)
        }); 
        Joi.validate(req.body, schema, function (err, value) {
            if(err){
                next(err);
            }else{
                next();
            }
        });        
    }

    blockUser(req,res,next){
        const schema = Joi.object().keys({
            userId: Joi.string().required(),
            isBlocked:Joi.boolean().required().default(false)
        }); 
        Joi.validate(req.body, schema, function (err, value) {
            if(err){
                next(err);
            }else{
                next();
            }
        });        
    }

    addFavouriteStore(req,res,next){
        const schema = Joi.object().keys({
            storeId: Joi.string().required(),
            isFovourite:Joi.boolean().default(false).required()
        }); 
        Joi.validate(req.body, schema, function (err, value) {
            if(err){
                next(err);
            }else{
                next();
            }
        });        
    }

    timeline(req,res,next){
        const schema = Joi.object().keys({
            limit:Joi.number().integer(),
            skip: Joi.number().integer(),
            page:Joi.number().integer().optional()      
        }); 
        Joi.validate(req.query, schema, function (err, value) {
            if(err){
                next(err);
            }else{
                next();
            }
         });        
    }
}

module.exports = new UserValidations();