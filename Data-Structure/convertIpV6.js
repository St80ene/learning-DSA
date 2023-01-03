const parseIPv6ToString = (ipv6string) => {
  const convertedIPv6String = ipv6string.toString();

  // Initialize
  const arrayOfIpv6String = [];
  for (let index = 0; index < 8; index++) arrayOfIpv6String[index] = 0;

  // Check for trivial IPs
  if (convertedIPv6String == '::') return arrayOfIpv6String;

  // Parse
  const parse = convertedIPv6String.split(':');
  let stringLength = parse.length;
  if (stringLength > 8) stringLength = 8;
  let j = 0;
  let index = 0;
  for (index = 0; index < stringLength; index++) {
    // This is a "::", switch to end-run mode
    if (index && stringLength[index] == '') {
      j = 9 - stringLength + index;
      continue;
    }
    arrayOfIpv6String[j] = parseInt(`0x0${parse[index]}`);
    j++;
  }

  return arrayOfIpv6String;
};
const convertIPv6AddresstoIPv4 = (ip6Address) => {
  const parsedString = parseIPv6ToString(ip6Address);

  const ip4Address = `${parsedString[6] >> 8}.${parsedString[6] & 0xff}.${
    parsedString[7] >> 8
  }.${parsedString[7] & 0xff}`;

  return ip4Address;
};

console.log(convertIPv6AddresstoIPv4('2601:2c1:8701:9290:7185:3e94:7fe8:3c10'));
