function DealerSaleRequest() {
  var dealerSaleAuthentication;
  var dealerSaleRequest;

  Object.defineProperties(this, {
    dealerSaleAuthentication: {
      get() {
        return dealerSaleAuthentication;
      },
      set(value) {
        dealerSaleAuthentication = value;
      },
    },
    dealerSaleRequest: {
      get() {
        return dealerSaleRequest;
      },
      set(value) {
        dealerSaleRequest = value;
      },
    },
  });
}

DealerSaleRequest.prototype.toJSON = function () {
  return {
    DealerSaleAuthentication: this.dealerSaleAuthentication,
    DealerSaleRequest: this.dealerSaleRequest,
  };
};

module.exports = DealerSaleRequest;
