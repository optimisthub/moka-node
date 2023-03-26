var BaseMokaClient = require("../BaseMokaClient");
var DealerRequest = require("../model/DealerRequest");

function Dealer(config) {
  this._config = config;

  this.retrieve = function (retrieveDealerRequest) {
    var request = new DealerRequest();
    request.dealerAuthentication = this.getAuthorizationParams();
    request.dealerRequest = retrieveDealerRequest;

    return this.request("POST", "/Dealer/GetDealer", request.toJSON());
  };
}

Dealer.prototype = new BaseMokaClient();

module.exports = Dealer;
