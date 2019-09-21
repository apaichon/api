const { bookBank } = require('./bookBank.class');
const createModel = require('../../models/bookBank.model');
const hooks = require('./bookBank.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/bookBank', new bookBank(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bookBank');

  service.hooks(hooks);
};
