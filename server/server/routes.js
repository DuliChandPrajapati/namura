const userRouter = require('../api/modules/users/router');
// const adminRouter = require('../api/modules/admin/router');
// const postRouter = require('../api/modules/posts/router');
// const vendorRouter = require('../api/modules/vendors/router');
// const commonRouter = require('../api/modules/common/router');
// const paymentRouter = require('../api/modules/payments/router');
// const userStatRouter = require('../api/modules/report/router');

module.exports = function routes(app) {
  app.use('/api/users', userRouter);
//   app.use('/api/admin', adminRouter);
//   app.use('/api/users', postRouter);
//   app.use('/api/vendors', vendorRouter);
//   app.use('/api/common', commonRouter);
//   app.use('/api/users', paymentRouter);
//   app.use('/api/users', userStatRouter);
}