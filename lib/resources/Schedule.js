var BaseMokaClient = require("../BaseMokaClient");
var DealerSaleRequest = require("../model/DealerSaleRequest");

function Schedule(config) {
  this._config = config;

  this.all = function () {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();

    return this.request("POST", "/DealerSale/GetScheduleList", request.toJSON());
  };

  this.create = function (createScheduleRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = createScheduleRequest;

    return this.request("POST", "/DealerSale/AddSchedule", request.toJSON());
  };
 
  this.delete = function (deleteScheduleRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = deleteScheduleRequest;

    return this.request("POST", "/DealerSale/DeleteSchedule", request.toJSON());
  };
  
  this.retrieve = function (retrieveScheduleRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = retrieveScheduleRequest;

    return this.request("POST", "/DealerSale/GetSchedule", request.toJSON());
  };
 
  this.update = function (updateScheduleRequest) {
    var request = new DealerSaleRequest();
    request.dealerSaleAuthentication = this.getAuthorizationParams();
    request.dealerSaleRequest = updateScheduleRequest;

    return this.request("POST", "/DealerSale/UpdateSchedule", request.toJSON());
  };
}

Schedule.prototype = new BaseMokaClient();

module.exports = Schedule;
