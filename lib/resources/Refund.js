var BaseMokaClient = require("../BaseMokaClient");
var PaymentDealerRequest = require("../model/PaymentDealerRequest");

function Refund(config) {
  this._config = config;

  this.create = function (createRefundRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.PaymentDealerRequest = createRefundRequest;

    return this.request("POST", "/PaymentDealer/DoCreateRefundRequest", request.toJSON());
  };
}

Refund.prototype = new BaseMokaClient();

module.exports = Refund;
