const fs = require('fs');
const path = require('path');
const config = require('config');

module.exports = Object.freeze({
  MONTH: [{
      order: 1,
      value: 'Jan'
    },
    {
      order: 2,
      value: 'Fab'
    },
    {
      order: 3,
      value: 'Mar'
    },
    {
      order: 4,
      value: 'Apr'
    },
    {
      order: 5,
      value: 'May'
    },
    {
      order: 6,
      value: 'Jun'
    },
    {
      order: 7,
      value: 'Jul'
    },
    {
      order: 8,
      value: 'Aug'
    },
    {
      order: 9,
      value: 'Sep'
    },
    {
      order: 10,
      value: 'Oct'
    },
    {
      order: 11,
      value: 'Nov'
    },
    {
      order: 12,
      value: 'Dec'
    }
  ],
  WEEK: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  SERVER: {
    DEV: config.get('dev'),
    STAGING: config.get('staging')
  },
  get VENDOR_RESET_PWD_LINK() {
    if (process.env.NODE_ENV === 'staging') {
      return `${this.SERVER.STAGING}:9191/#/reset/`;
    } else if (process.env.NODE_ENV === 'development') {
      return `${this.SERVER.DEV}:9191/#/reset/`;
    } else {
      return `${this.SERVER.DEV}:9191/#/reset/`;
    }
  },
  USER_TYPE: {
    CUSTOMER: 1,
    VENDOR: 2,
    ADMIN: 3
  },
  OTP_PREFERENCES: {
    LENGTH: 4,
    EXPIRE_IN_SECONDS: 300,
    ENCODING: 'base32'
  },
  GENDER: {
    MALE: 1,
    FEMALE: 2
  },
  STATS_FILTER: {
    TODAY: 1,
    WEEKLY: 2,
    MONTHLY: 3
  }
});