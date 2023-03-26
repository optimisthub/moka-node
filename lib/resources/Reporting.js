var BaseMokaClient = require("../BaseMokaClient");
var DealerSaleRequest = require("../model/DealerSaleRequest");
var DealerStatementRequest = require("../model/DealerStatementRequest");
var DealerAccountingRequest = require("../model/DealerAccountingRequest");

function Reporting(config) {
  this._config = config;

  this.accounting = function (reportingAccountingListRequest) {
    var request = new DealerAccountingRequest();
    request.dealerAuthentication = this.getAuthorizationParams();
    request.dealerAccountingRequest = reportingAccountingListRequest;

    return this.request("POST", "/Dealer/GetAccountingList", request.toJSON());
  };
  
  this.paymentPlan = function (reportingPaymentPlanRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = reportingPaymentPlanRequest;

    return this.request("POST", "/DealerSale/GetPaymentPlanReport", request.toJSON());
  };
  
  this.statement = function (reportingStatementListRequest) {
    var request = new DealerStatementRequest();
    request.dealerAuthentication = this.getAuthorizationParams();
    request.dealerStatementRequest = reportingStatementListRequest;

    return this.request("POST", "/Dealer/GetStatementList", request.toJSON());
  };
}

Reporting.prototype = new BaseMokaClient();

module.exports = Reporting;
