function PaymentDealerRequest() {
  var paymentDealerAuthentication;
  var paymentDealerRequest;

  Object.defineProperties(this, {
    paymentDealerAuthentication: {
      get() {
        return paymentDealerAuthentication;
      },
      set(value) {
        paymentDealerAuthentication = value;
      },
    },
    paymentDealerRequest: {
      get() {
        return paymentDealerRequest;
      },
      set(value) {
        paymentDealerRequest = value;
      },
    },
  });
}

PaymentDealerRequest.prototype.toJSON = function () {
  return {
    PaymentDealerAuthentication: this.paymentDealerAuthentication,
    PaymentDealerRequest: this.paymentDealerRequest,
  };
};

module.exports = PaymentDealerRequest;
