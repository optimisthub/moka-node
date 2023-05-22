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

moka.payments
  .create({
    CardHolderFullName: "John Doe",
    CardNumber: "5127541122223332",
    ExpMonth: "12",
    ExpYear: "2025",
    CvcNumber: "123",
    CardToken: "",
    Amount: 0.01,
    Currency: "TL",
    InstallmentNumber: 1,
    ClientIP: "192.168.1.116",
    OtherTrxCode: "20210114170108",
    SubMerchantName: "",
    IsPoolPayment: 0,
    IsTokenized: 0,
    IntegratorId: 0,
    Software: "Software",
    Description: "",
    IsPreAuth: 0,
    BuyerInformation: {
      BuyerFullName: "John Doe",
      BuyerGsmNumber: "5551110022",
      BuyerEmail: "email@email.com",
      BuyerAddress: "Levent Mah. Meltem Sok. İş Kuleleri Kule 2 No: 10 / 4 Beşiktaş / İstanbul",
    },
  })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));

moka.binNumber
  .retrieve({
    BinNumber: 512754,
  })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));

moka.transactions
  .all({
    TrxStartDate: "2023-05-23 00:00",
    TrxEndDate: "2023-05-23 01:00",
    TrxType: 2,
    TrxStatus: 1,
  })
  .then((res) => console.log(res.data))
  .catch((error) => console.error(error));

// Resources
// moka.binNumber
// moka.payments
// moka.transactions
// moka.cards
// moka.customers
// moka.dealers
// moka.paymentLinks
// moka.paymentPlans
// moka.products
// moka.refunds
// moka.reporting
// moka.sales
// moka.schedules

// You can see all resources in lib/resources folder
```

## Test Cards

See the [Test Cards](https://developer.moka.com/home.php?page=test-kartlari).
