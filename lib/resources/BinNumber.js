var BaseMokaClient = require("../BaseMokaClient");
var BankCardInformationRequest = require("../model/BankCardInformationRequest");

function BinNumber(config) {
  this._config = config;

  this.retrieve = function (retrieveBinNumberRequest) {
    var request = new BankCardInformationRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.bankCardInformationRequest = retrieveBinNumberRequest;

    return this.request("POST", "/PaymentDealer/GetBankCardInformation", request.toJSON());
  };
}

BinNumber.prototype = new BaseMokaClient();

module.exports = BinNumber;
