const postgreSql = require('./notification/notification.service');
const accountPgSql = require('./account/account.service');
const profiletPgSql = require('./profile/profile.service');

const accountProvider = require('./account/accountProvider.service')
const accountStatus = require('./account/accountStatus.service')
const activatePurpose = require('./account/activatePurpose.service')
const personalPrefix = require('./profile/personalPrefix.service')
const gender = require('./profile/gender.service')
const bookBank = require('./profile/bookBank.service')
const bank = require('./profile/bank.service')
const historyType = require('./appSetting/historyType.service')
const contentType = require('./news/contentType.service')
const mediaType = require('./news/mediaType.service')
const addressType = require('./profile/addressType.service')
const amphor = require('./profile/amphor.service')
const zipcode = require('./profile/zipcode.service')
const thumbol = require('./profile/thumbol.service')
const province = require('./profile/province.service')
const paidStatus = require('./accounting/paidStatus.service')
const companyCategory = require('./profile/companyCategory.service')
const paymentStatus = require('./accounting/paymentStatus.service')
const accountingJournalType = require('./accounting/accountingJournalType.service')
const newsCategory = require('./news/newsCategory.service')
const genre = require('./news/genre.service')
const salesCondition = require('./news/salesCondition.service')
const role = require('./security/role.service')
const menu = require('./appSetting/menu.service')
const rolemenus = require('./security/rolemenus.service')
const rolemembers = require('./security/rolemembers.service')
const distributionChannel = require('./news/distributionChannel.service')
const news = require('./news/news.service')
const media = require('./news/media.service')
const previewVideo = require('./news/previewVideo.service')
const buyerGroup = require('./news/buyerGroup.service')
const claimAction = require('./news/claimAction.service')
const company = require('./profile/company.service')
const creditTerm = require('./accounting/creditTerm.service')
const businessRules = require('./appSetting/businessRules.service')
const transStatus = require('./appSetting/transStatus.service')
const newsAssets = require('./news/newsAssets.service');
const broadcasterPackage = require('./accounting/broadcasterPackage.service');
const invoice = require('./accounting/invoice.service');
const receipt = require('./accounting/receipt.service');
const invoiceItem = require('./accounting/invoiceItem.service');
const receiptItem = require('./accounting/receiptItem.service');


const buyPackageHistory = require('./accounting/buyPackageHistory.service');


// const accountingJournalType = require('./appSetting/accountingJournalType.service');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(postgreSql);
  app.configure(accountPgSql);
  app.configure(profiletPgSql);

  app.configure(accountProvider);
  app.configure(accountStatus);
  app.configure(activatePurpose);
  app.configure(personalPrefix);
  app.configure(gender);
  app.configure(bookBank);
  app.configure(bank);
  app.configure(historyType);
  app.configure(contentType);
  app.configure(mediaType);
  app.configure(addressType);
  app.configure(amphor);
  app.configure(zipcode);
  app.configure(thumbol);
  app.configure(province);
  app.configure(paidStatus);
  app.configure(companyCategory);
  app.configure(paymentStatus);
  app.configure(accountingJournalType);
  app.configure(newsCategory);
  app.configure(genre);
  app.configure(salesCondition);
  app.configure(role);
  app.configure(menu);
  app.configure(rolemenus);
  app.configure(rolemembers);
  app.configure(distributionChannel);
  app.configure(news);
  app.configure(media);
  app.configure(previewVideo);
  app.configure(buyerGroup);
  app.configure(claimAction);
  app.configure(company);
  app.configure(creditTerm);
  app.configure(businessRules);
  app.configure(transStatus);
  app.configure(newsAssets);
  app.configure(broadcasterPackage);
  app.configure(invoice);
  app.configure(receipt);
  app.configure(invoiceItem);
  app.configure(receiptItem);
  app.configure(buyPackageHistory);
};
