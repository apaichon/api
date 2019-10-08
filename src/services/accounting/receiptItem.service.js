// Initializes the `receiptItem` service on path `/receiptItem`
const { ReceiptItem } = require('./receiptItem.class');
const createModel = require('../../models/receiptItem.model');
const hooks = require('./receiptItem.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/receiptItem', new ReceiptItem(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('receiptItem');

  service.hooks(hooks);
};
