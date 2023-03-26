var BinNumber = require("./resources/BinNumber");
var Card = require("./resources/Card");
var Customer = require("./resources/Customer");
var Dealer = require("./resources/Dealer");
var PaymentLink = require("./resources/PaymentLink");
var PaymentPlan = require("./resources/PaymentPlan");
var Payment = require("./resources/Payment");
var Product = require("./resources/Product");
var Refund = require("./resources/Refund");
var Reporting = require("./resources/Reporting");
var Sale = require("./resources/Sale");
var Schedule = require("./resources/Schedule");
var Transaction = require("./resources/Transaction");

function Moka(config) {
  if (!(this instanceof Moka)) {
    return new Moka(config);
  }

  if (typeof config === "undefined") {
    config = {
      dealerCode: null,
      username: null,
      password: null,
      baseUrl: null,
    };
  }

  this._config = {
    dealerCode: config.dealerCode || process.env.MOKA_DEALER_CODE,
    username: config.username || process.env.MOKA_USERNAME,
    password: config.password || process.env.MOKA_PASSWORD,
    baseUrl: config.baseUrl || process.env.MOKA_BASE_URL,
  };

  this.binNumber = new BinNumber(this._config);
  this.cards = new Card(this._config);
  this.customers = new Customer(this._config);
  this.dealers = new Dealer(this._config);
  this.paymentLinks = new PaymentLink(this._config);
  this.paymentPlans = new PaymentPlan(this._config);
  this.payments = new Payment(this._config);
  this.products = new Product(this._config);
  this.refunds = new Refund(this._config);
  this.reporting = new Reporting(this._config);
  this.sales = new Sale(this._config);
  this.schedules = new Schedule(this._config);
  this.transactions = new Transaction(this._config);
}

module.exports = Moka;
