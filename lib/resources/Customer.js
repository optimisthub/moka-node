var BaseMokaClient = require("../BaseMokaClient");
var DealerCustomerRequest = require("../model/DealerCustomerRequest");

function Customer(config) {
  this._config = config;

  this.all = function () {
    var request = new DealerCustomerRequest();
    request.dealerCustomerAuthentication = this.getAuthorizationParams();

    return this.request("POST", "/DealerCustomer/GetCustomerList", request.toJSON());
  };

  this.create = function (createCustomerRequest) {
    var request = new DealerCustomerRequest();
    request.dealerCustomerAuthentication = this.getAuthorizationParams();
    request.dealerCustomerRequest = createCustomerRequest;

    return this.request("POST", "/DealerCustomer/AddCustomer", request.toJSON());
  };
  
  this.createWithCard = function (createCustomerWithCardRequest) {
    var request = new DealerCustomerRequest();
    request.dealerCustomerAuthentication = this.getAuthorizationParams();
    request.dealerCustomerRequest = createCustomerWithCardRequest;

    return this.request("POST", "/DealerCustomer/AddCustomerWithCard", request.toJSON());
  };

  this.delete = function (deleteCustomerRequest) {
    var request = new DealerCustomerRequest();
    request.dealerCustomerAuthentication = this.getAuthorizationParams();
    request.dealerCustomerRequest = deleteCustomerRequest;

    return this.request("POST", "/DealerCustomer/RemoveCustomer", request.toJSON());
  };

  this.retrieve = function (retrieveCustomerRequest) {
    var request = new DealerCustomerRequest();
    request.dealerCustomerAuthentication = this.getAuthorizationParams();
    request.dealerCustomerRequest = retrieveCustomerRequest;

    return this.request("POST", "/DealerCustomer/GetCustomer", request.toJSON());
  };

  this.update = function (updateCustomerRequest) {
    var request = new DealerCustomerRequest();
    request.dealerCustomerAuthentication = this.getAuthorizationParams();
    request.dealerCustomerRequest = updateCustomerRequest;

    return this.request("POST", "/DealerCustomer/UpdateCustomer", request.toJSON());
  };
}

Customer.prototype = new BaseMokaClient();

module.exports = Customer;
