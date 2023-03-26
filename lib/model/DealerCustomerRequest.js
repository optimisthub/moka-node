function DealerCustomerRequest() {
  var dealerCustomerAuthentication;
  var dealerCustomerRequest;

  Object.defineProperties(this, {
    dealerCustomerAuthentication: {
      get() {
        return dealerCustomerAuthentication;
      },
      set(value) {
        dealerCustomerAuthentication = value;
      },
    },
    dealerCustomerRequest: {
      get() {
        return dealerCustomerRequest;
      },
      set(value) {
        dealerCustomerRequest = value;
      },
    },
  });
}

DealerCustomerRequest.prototype.toJSON = function () {
  return {
    DealerCustomerAuthentication: this.dealerCustomerAuthentication,
    DealerCustomerRequest: this.dealerCustomerRequest,
  };
};

module.exports = DealerCustomerRequest;
