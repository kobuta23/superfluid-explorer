export const currencies = { matic: {}, xdai: {} };
currencies.matic["0x27e1e4e6bc79d93032abef01025811b7e4727e85".toLowerCase()] =
  "ETHx";
currencies.matic["0x3ad736904e9e65189c3000c7dd2c8ac8bb7cd4e3".toLowerCase()] =
  "MATICx";
currencies.matic["0x1305F6B6Df9Dc47159D12Eb7aC2804d4A33173c2".toLowerCase()] =
  "DAIx";
currencies.matic["0xCAa7349CEA390F89641fe306D93591f87595dc1F".toLowerCase()] =
  "USDCx";

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
  ACx: {
    curvature: Math.floor(Math.random() * 10) / 10,
    rotation: Math.PI / Math.floor(Math.random() * 10) / 10,
    color: "#44ff44"
  }
};