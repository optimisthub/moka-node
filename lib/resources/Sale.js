var BaseMokaClient = require("../BaseMokaClient");
var DealerSaleRequest = require("../model/DealerSaleRequest");

function Sale(config) {
  this._config = config;

  this.all = function () {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();

    return this.request("POST", "/DealerSale/GetSaleList", request.toJSON());
  };

  this.create = function (createSaleRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = createSaleRequest;

    return this.request("POST", "/DealerSale/AddSale", request.toJSON());
  };
  
  this.delete = function (deleteSaleRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = deleteSaleRequest;

    return this.request("POST", "/DealerSale/DeleteSale", request.toJSON());
  };
 
  this.retrieve = function (retrieveSaleRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = retrieveSaleRequest;

    return this.request("POST", "/DealerSale/GetSale", request.toJSON());
  };
 
  this.update = function (updateSaleRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = updateSaleRequest;

    return this.request("POST", "/DealerSale/UpdateSale", request.toJSON());
  };
}

Sale.prototype = new BaseMokaClient();

module.exports = Sale;
