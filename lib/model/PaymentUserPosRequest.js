function PaymentUserPosRequest() {
  var dealerAuthentication;
  var paymentUserPosRequest;

  Object.defineProperties(this, {
    dealerAuthentication: {
      get() {
        return dealerAuthentication;
      },
      set(value) {
        dealerAuthentication = value;
      },
    },
    paymentUserPosRequest: {
      get() {
        return paymentUserPosRequest;
      },
      set(value) {
        paymentUserPosRequest = value;
      },
    },
  });
}

PaymentUserPosRequest.prototype.toJSON = function () {
  return {
    DealerAuthentication: this.dealerAuthentication,
    PaymentUserPosRequest: this.paymentUserPosRequest,
  };
};

module.exports = PaymentUserPosRequest;
