var BaseMokaClient = require("../BaseMokaClient");
var PaymentUserPosRequest = require("../model/PaymentUserPosRequest");

function PaymentLink(config) {
  this._config = config;

  this.create = function (createPaymentLinkRequest) {
    var request = new PaymentUserPosRequest();
    request.dealerAuthentication = this.getAuthorizationParams();
    request.paymentUserPosRequest = createPaymentLinkRequest;

    return this.request("POST", "/PaymentUserPos/CreateUserPosPayment", request.toJSON());
  };
}

PaymentLink.prototype = new BaseMokaClient();

module.exports = PaymentLink;
