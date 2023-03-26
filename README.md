# Moka API NodeJS Client

The Moka API NodeJS Client provides convenient access to the [Moka API](https://developer.moka.com/) from applications written in the NodeJS.

![image](https://optimisthub.com/cdn/moka/moka-node.js-api-client-cover-github.png)

## Requirements

Node 12 or higher.

# SSL / TLS
PCI-DSS rules only allow the use of TLS 1.2 and above protocols. Please ensure that your application POST to Moka URL over these protocols. Otherwise, errors such as 'Connection will be closed or Connection Closed' will be received.

## Documentation

See the [Moka API docs](https://developer.moka.com).

## Installation

Install the package with:

```sh
npm install moka-client --save
```

## Usage

```js
var MokaClient = require("moka-client");

var moka = new MokaClient({
  dealerCode: "",
  username: "",
  password: "",
  baseUrl: "https://service.refmoka.com",
});

moka.binNumber
  .retrieve({
    BinNumber: 526911,
  })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));
```

## Test Cards

See the [Test Cards](https://developer.moka.com/home.php?page=test-kartlari).
