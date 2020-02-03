const controller = require('../controller/products')

module.exports = function (app, rt) {

  rt.route('/v1')
    .post(controller.addProducts)
    .put(controller.updateProducts)
    .delete(controller.deleteProducts)
    .get(controller.listProducts)



  app.use('/api', rt)


}
