const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASY2plEoZbJu-PAdZPuW8RWtPvnxup_HfwYMHtWDU6TvTASHOZ1Asdk0bc-ld3-oF-i464MCDHfWifIt",
  client_secret: "EBx0PMXAPdoq3-h2qnluPTnUIk-yw6enNmc0NGzDpSaKRGGLUv_NM2dBivWf4liMeXEqluclJVqMhrVS",
});

module.exports = paypal;
