function BankCardInformationRequest() {
  var paymentDealerAuthentication;
  var bankCardInformationRequest;

  Object.defineProperties(this, {
    paymentDealerAuthentication: {
      get() {
        return paymentDealerAuthentication;
      },
      set(value) {
        paymentDealerAuthentication = value;
      },
    },
    bankCardInformationRequest: {
      get() {
        return bankCardInformationRequest;
      },
      set(value) {
        bankCardInformationRequest = value;
      },
    },
  });
}

BankCardInformationRequest.prototype.toJSON = function () {
  return {
    PaymentDealerAuthentication: this.paymentDealerAuthentication,
    BankCardInformationRequest: this.bankCardInformationRequest,
  };
};

module.exports = BankCardInformationRequest;
