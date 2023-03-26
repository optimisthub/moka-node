var BaseMokaClient = require("../BaseMokaClient");
var DealerSaleRequest = require("../model/DealerSaleRequest");

function PaymentPlan(config) {
  this._config = config;

  this.all = function (retrievePaymentPlanListRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = retrievePaymentPlanListRequest;

    return this.request("POST", "/DealerSale/GetPaymentPlanList", request.toJSON());
  };
  
  this.create = function (createPaymentPlanRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = createPaymentPlanRequest;

    return this.request("POST", "/DealerSale/AddPaymentPlan", request.toJSON());
  };
  
  this.delete = function (deletePaymentPlanRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = deletePaymentPlanRequest;

    return this.request("POST", "/DealerSale/DeletePaymentPlan", request.toJSON());
  };
  
  this.retrieve = function (retrievePaymentPlanRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = retrievePaymentPlanRequest;

    return this.request("POST", "/DealerSale/GetPaymentPlan", request.toJSON());
  };

  this.retrieveHistory = function (RetrievePaymentPlanHistoryListRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = RetrievePaymentPlanHistoryListRequest;

    return this.request("POST", "/DealerSale/GetPaymentPlanHistoryList", request.toJSON());
  };

  this.update = function (updatePaymentPlanRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = updatePaymentPlanRequest;

    return this.request("POST", "/DealerSale/UpdatePaymentPlan", request.toJSON());
  };
}

PaymentPlan.prototype = new BaseMokaClient();

module.exports = PaymentPlan;
