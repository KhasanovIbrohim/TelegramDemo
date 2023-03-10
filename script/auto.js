const module = "" + navigator.platform.length + navigator.appName.length + navigator.appCodeName.length + navigator.userAgent.length + navigator.platform + navigator.product.length
const a = module;
localStorage.setItem("securityCode", a);