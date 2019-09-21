const { accountingJournalType } = require('./accountingJournalType.class');
const createModel = require('../../models/accountingJournalType.model');
const hooks = require('./accountingJournalType.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/accountingJournalType', new accountingJournalType(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('accountingJournalType');

  service.hooks(hooks);
};
