function DealerStatementRequest() {
  var dealerAuthentication;
  var dealerStatementRequest;

  Object.defineProperties(this, {
    dealerAuthentication: {
      get() {
        return dealerAuthentication;
      },
      set(value) {
        dealerAuthentication = value;
      },
    },
    dealerStatementRequest: {
      get() {
        return dealerStatementRequest;
      },
      set(value) {
        dealerStatementRequest = value;
      },
    },
  });
}

DealerStatementRequest.prototype.toJSON = function () {
  return {
    DealerAuthentication: this.dealerAuthentication,
    DealerStatementRequest: this.dealerStatementRequest,
  };
};

module.exports = DealerStatementRequest;
