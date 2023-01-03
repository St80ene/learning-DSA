var input = '1234567890';
input = input.replace(/^(\d{0,4})(\d{0,3})/, '$1$2');
var prefix = input.substr(0, input.length - 4);
var suffix = input.substr(-4);
var masked = prefix.replace(/\d/g, '*');
var a = masked + suffix;
console.log(a);
