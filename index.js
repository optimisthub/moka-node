var Moka = require("./lib/Moka");

// Kimlik bilgileri kaynak kodda tutulmaz; ortam degiskenlerinden okunur.
//   MOKA_DEALER_CODE, MOKA_USERNAME, MOKA_PASSWORD
var moka = new Moka({
  dealerCode: process.env.MOKA_DEALER_CODE || "",
  username: process.env.MOKA_USERNAME || "",
  password: process.env.MOKA_PASSWORD || "",
  baseUrl: process.env.MOKA_BASE_URL || "https://service.refmoka.com",
});

// var res = moka.binNumber.retrieve({
//     BinNumber: 526911,
//   })
//   .then((res) => console.log(res.data));

// moka.transactions
//   .all({
//     TrxStartDate: "2023-02-01 00:00",
//     TrxEndDate: "2023-02-02 00:00",
//     TrxType: 2,
//     TrxStatus: 1,
//   })
//   .then((res) => console.log(res.data));
