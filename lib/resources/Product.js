var BaseMokaClient = require("../BaseMokaClient");
var DealerSaleRequest = require("../model/DealerSaleRequest");

function Product(config) {
  this._config = config;

  this.all = function () {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();

    return this.request("POST", "/DealerSale/GetProductList", request.toJSON());
  };

  this.create = function (createProductRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = createProductRequest;

    return this.request("POST", "/DealerSale/AddProduct", request.toJSON());
  };
 
  this.delete = function (deleteProductRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = deleteProductRequest;

    return this.request("POST", "/DealerSale/DeleteProduct", request.toJSON());
  };
}

Product.prototype = new BaseMokaClient();

module.exports = Product;
