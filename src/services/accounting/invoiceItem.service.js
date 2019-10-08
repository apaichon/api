// Initializes the `invoiceItem` service on path `/invoiceItem`
const { InvoiceItem } = require('./invoiceItem.class');
const createModel = require('../../models/invoiceItem.model');
const hooks = require('./invoiceItem.hook');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/invoiceItem', new InvoiceItem(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('invoiceItem');

  service.hooks(hooks);
};
