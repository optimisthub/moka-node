function DealerAccountingRequest() {
  var dealerAuthentication;
  var dealerAccountingRequest;

  Object.defineProperties(this, {
    dealerAuthentication: {
      get() {
        return dealerAuthentication;
      },
      set(value) {
        dealerAuthentication = value;
      },
    },
    dealerAccountingRequest: {
      get() {
        return dealerAccountingRequest;
      },
      set(value) {
        dealerAccountingRequest = value;
      },
    },
  });
}

DealerAccountingRequest.prototype.toJSON = function () {
  return {
    DealerAuthentication: this.dealerAuthentication,
    DealerAccountingRequest: this.dealerAccountingRequest,
  };
};

module.exports = DealerAccountingRequest;
