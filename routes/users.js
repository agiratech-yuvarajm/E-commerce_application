const controller = require('../controller/users')

module.exports = function (app, rt) {

  rt.route('/')
    .post(controller.addUsers)
    .get(controller.listUsers)
    .put(controller.updateUsers)
    .delete(controller.deleteUsers)



  app.use('/api/v1/users', rt)


}
