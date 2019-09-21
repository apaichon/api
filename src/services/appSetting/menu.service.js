const { menu } = require('./menu.class');
const createModel = require('../../models/menu.model');
const hooks = require('./menu.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/menu', new menu(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('menu');

  service.hooks(hooks);
};
