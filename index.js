var Moka = require("./lib/Moka");

var moka = new Moka({
  dealerCode: "1731",
  username: "TestMoka2",
  password: "HYSYHDS8DU8HU",
  baseUrl: "https://service.refmoka.com",
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
