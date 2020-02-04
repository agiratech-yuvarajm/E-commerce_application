module.exports = function (app, rt) {

  require('./products')(app, rt)
  require('./users')(app, rt)
}
