export const currencies = { matic: {}, xdai: {} };
currencies.matic["0x27e1e4e6bc79d93032abef01025811b7e4727e85".toLowerCase()] =
  "ETHx";
currencies.matic["0x3ad736904e9e65189c3000c7dd2c8ac8bb7cd4e3".toLowerCase()] =
  "MATICx";
currencies.matic["0x1305F6B6Df9Dc47159D12Eb7aC2804d4A33173c2".toLowerCase()] =
  "DAIx";
currencies.matic["0xCAa7349CEA390F89641fe306D93591f87595dc1F".toLowerCase()] =
  "USDCx";
currencies.matic["0xe1cA10e6a10c0F72B74dF6b7339912BaBfB1f8B5".toLowerCase()] =
  "QIx";
currencies.matic["0xc49c15350f001efEe91E154F03BdDF38CFD0d96e".toLowerCase()] =
  "ACDCx";
currencies.matic["0x84B2e92E08008c0081C8c21a35FdA4DdC5d21aC6".toLowerCase()] =
  "sSDT";
currencies.matic["0x1adca32b906883e474aebcba5708b41f3645f941".toLowerCase()] =
  "MOCAx";
currencies.matic["0x61a7b6f0a7737d9bd38fdeaf1d4160e16bf23043".toLowerCase()] =
  "WORKx";
currencies.matic["0x4086ebf75233e8492f1bcda41c7f2a8288c2fb92".toLowerCase()] =
  "WBTCx";

currencies.xdai["0x59988e47A3503AaFaA0368b9deF095c818Fdca01".toLowerCase()] =
  "xDAIx";
currencies.xdai["0x63e62989D9EB2d37dfDB1F93A22f063635b07d51".toLowerCase()] =
  "MIVA";
currencies.xdai["0x2bF2ba13735160624a0fEaE98f6aC8F70885eA61".toLowerCase()] =
  "FRACTION";
currencies.xdai["0x6689A8F4fdAd6712888682C9ce81B26762389F40".toLowerCase()] =
  "WORK";
currencies.xdai["0xa94c0e84B8f27DeB34F50001D47d870B67E47466".toLowerCase()] =
  "ACx";

export const tokens = {
  ETHx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#aaa"
  },
  MATICx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#0000ff"
  },
  DAIx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#ff8200"
  },
  xDAIx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#ff8200"
  },
  USDCx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#00aaff"
  },
  MIVA: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#923DC3"
  },
  FRACTION: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#fff"
  },
  WORK: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#00ff00"
  },
  WORKx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#00dd00"
  },
  ACx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#44ff44"
  },
  ACDCx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#84ff84"
  },
  QIx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#00ff44"
  },
  sSDT: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#888888"
  },
  MOCAx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#BEA493"
  },
  WBTCx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#f2a900"
  }
};
