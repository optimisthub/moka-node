var BaseMokaClient = require("../BaseMokaClient");
var PaymentDealerRequest = require("../model/PaymentDealerRequest");

function Payment(config) {
  this._config = config;

  this.all = function (retrievePaymentListRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = retrievePaymentListRequest;

    return this.request("POST", "/PaymentDealer/GetPaymentList", request.toJSON());
  };
  
  this.approval = function (approvalRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = approvalRequest;

    return this.request("POST", "/PaymentDealer/DoApprovePoolPayment", request.toJSON());
  };

  this.cancelApproval = function (cancelApprovalRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = cancelApprovalRequest;

    return this.request("POST", "/PaymentDealer/UndoApprovePoolPayment", request.toJSON());
  };
  
  this.cancel = function (cancelPaymentRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = cancelPaymentRequest;

    return this.request("POST", "/PaymentDealer/DoVoid", request.toJSON());
  };
  
  this.capture = function (captureRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = captureRequest;

    return this.request("POST", "/PaymentDealer/DoCapture", request.toJSON());
  };
 
  this.create = function (createPaymentRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = createPaymentRequest;

    return this.request("POST", "/PaymentDealer/DoDirectPayment", request.toJSON());
  };

  this.createThreeds = function (createPaymentRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = createPaymentRequest;

    return this.request("POST", "/PaymentDealer/DoDirectPaymentThreeD", request.toJSON());
  };

  this.createThreedsMobile = function (createMobilePaymentRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = createMobilePaymentRequest;

    return this.request("POST", "/PaymentDealer/DoDirectPaymentThreeDMobile", request.toJSON());
  };
  
  this.retrieve = function (retrievePaymentDetailRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = retrievePaymentDetailRequest;

    return this.request("POST", "/PaymentDealer/GetDealerPaymentTrxDetailList", request.toJSON());
  };
  
  this.retrieveAmount = function (retrievePaymentAmountRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = retrievePaymentAmountRequest;

    return this.request("POST", "/PaymentDealer/DoCalcPaymentAmount", request.toJSON());
  };
 
  this.retrieveInstallmentInfo = function (retrieveInstallmentInfoRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = retrieveInstallmentInfoRequest;

    return this.request("POST", "/PaymentDealer/DoCalcPaymentTable", request.toJSON());
  };
  
  this.update = function (updatePaymentRequest) {
    var request = new PaymentDealerRequest();
    request.paymentDealerAuthentication = this.getAuthorizationParams();
    request.paymentDealerRequest = updatePaymentRequest;

    return this.request("POST", "/PaymentDealer/UpdateDealerPayment", request.toJSON());
  };
}

Payment.prototype = new BaseMokaClient();

module.exports = Payment;
