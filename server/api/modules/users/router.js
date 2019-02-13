const express = require('express');
const controller = require('./controller');
const validation = require('./validation');
const auth = require('../../middleware');
const { USER_TYPE } = require('../../../lib/constant');

module.exports = express
  .Router()
  .post('/register', validation.create, controller.create)
  // .post('/login', validation.login, controller.login)
  // .post('/changePassword', validation.changePassword, auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.changePassword)
  // .post('/forgotPassword', validation.forgotPassword, controller.forgotPassword)
  // .post('/resetPassword', validation.resetPassword, controller.resetPassword)
  // .post('/profile', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), validation.updateProfile, controller.updateProfile)
  // .get('/profile', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.profile)
  // .get('/profile/:userId', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.profile)
  // .post('/follow', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), validation.follow, controller.follow)
  // .get('/timeline', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), validation.timeline, controller.timeline)
  // .post('/favourite-stores', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), validation.addFavouriteStore, controller.addFavouriteStore)
  // .get('/favourite-stores', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.getFavouriteStore)
  // .get('/followers', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.followerList)
  // .get('/followings', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.followingList)
  // .put('/block-users', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), validation.blockUser, controller.blockUser)
  // .get('/block-users', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.blockedUserList)
  // .put('/settings', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.settings)
  // .get('/settings', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.settings)
  // .get('/notifications', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.notifications)
  // .post('/help', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.help)
  // .post('/logout', auth.verifyJWT_MW, auth.requireRole(USER_TYPE.CUSTOMER), controller.logout);
