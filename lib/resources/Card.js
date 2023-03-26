var BaseMokaClient = require("../BaseMokaClient");
var DealerCustomerRequest = require("../model/DealerCustomerRequest");

function Card(config) {
  this._config = config;

  this.all = function (retrieveCardListRequest) {
    var request = new DealerCustomerRequest();
    request.dealerCustomerAuthentication = this.getAuthorizationParams();
    request.dealerCustomerRequest = retrieveCardListRequest;

    return this.request("POST", "/DealerCustomer/GetCardList", request.toJSON());
  };
  
  this.create = function (createCardRequest) {
    var request = new DealerCustomerRequest();
    request.dealerCustomerAuthentication = this.getAuthorizationParams();
    request.dealerCustomerRequest = createCardRequest;

    return this.request("POST", "/DealerCustomer/AddCard", request.toJSON());
  };

  this.delete = function (deleteCardRequest) {
    var request = new DealerCustomerRequest();
    request.dealerCustomerAuthentication = this.getAuthorizationParams();
    request.dealerCustomerRequest = deleteCardRequest;

    return this.request("POST", "/DealerCustomer/RemoveCard", request.toJSON());
  };
  
  this.retrieve = function (retrieveCardRequest) {
    var request = new DealerCustomerRequest();
    request.dealerCustomerAuthentication = this.getAuthorizationParams();
    request.dealerCustomerRequest = retrieveCardRequest;

    return this.request("POST", "/DealerCustomer/GetCard", request.toJSON());
  };
 
  this.update = function (updateCardRequest) {
    var request = new DealerCustomerRequest();
    request.dealerCustomerAuthentication = this.getAuthorizationParams();
    request.dealerCustomerRequest = updateCardRequest;

    return this.request("POST", "/DealerCustomer/UpdateCard", request.toJSON());
  };
}

Card.prototype = new BaseMokaClient();

module.exports = Card;
