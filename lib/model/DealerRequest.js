function DealerRequest() {
  var dealerAuthentication;
  var dealerRequest;

  Object.defineProperties(this, {
    dealerAuthentication: {
      get() {
        return dealerAuthentication;
      },
      set(value) {
        dealerAuthentication = value;
      },
    },
    dealerRequest: {
      get() {
        return dealerRequest;
      },
      set(value) {
        dealerRequest = value;
      },
    },
  });
}

DealerRequest.prototype.toJSON = function () {
  return {
    DealerAuthentication: this.dealerAuthentication,
    DealerRequest: this.dealerRequest,
  };
};

module.exports = DealerRequest;
