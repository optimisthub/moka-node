var axios = require("axios");
var crypto = require("crypto");

function BaseMokaClient() {}

BaseMokaClient.prototype.request = function (method, path, params, headers) {
  return axios({
    method: method,
    url: this._prepareRequestUrl(path),
    data: params,
    headers: this._prepareRequestHeaders(headers),
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

BaseMokaClient.prototype.getAuthorizationParams = function () {
  return {
    DealerCode: this._config.dealerCode,
    Username: this._config.username,
    Password: this._config.password,
    CheckKey: this._generateHash(),
  };
};

BaseMokaClient.prototype._generateHash = function () {
  var data = `${this._config.dealerCode}MK${this._config.username}PD${this._config.password}`;

  return crypto.createHash("sha256").update(data).digest("hex");
};

BaseMokaClient.prototype._prepareRequestUrl = function (path) {
  return `${this._config.baseUrl}${path}`;
};

BaseMokaClient.prototype._prepareRequestHeaders = function (headers) {
  var defaultHeaders = {
    "Accept": "application/json",
    "Content-type": "application/json",
  };

  return Object.assign(defaultHeaders, headers);
};

module.exports = BaseMokaClient;
