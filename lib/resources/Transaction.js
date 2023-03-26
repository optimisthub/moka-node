var BaseMokaClient = require("../BaseMokaClient");
var PaymentDealerRequest = require("../model/PaymentDealerRequest");

function Transaction(config) {
  this._config = config;

  this.all = function (retrieveTransactionListRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = retrieveTransactionListRequest;

    return this.request("POST", "/PaymentDealer/GetPaymentTrxList", request.toJSON());
  };
}

Transaction.prototype = new BaseMokaClient();

module.exports = Transaction;
