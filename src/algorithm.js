const crypto = require('crypto');
const base32 = require('hi-base32');
function generateSecret(length = 20) {
  const randomBuffer = crypto.randomBytes(length);
  return base32.encode(randomBuffer).replace(/=/g, '');
}
const decodedSecret = base32.decode.asBytes(secret);

const buffer = Buffer.alloc(8);
for (let i = 0; i < 8; i++) {
   buffer[7 - i] = counter & 0xff;
   counter = counter >> 8;
}

const hmac = crypto.createHmac('sha1', Buffer.from(decodedSecret));
hmac.update(buffer);
const hmacResult = hmac.digest();

const offset = hmacValue[hmacValue.length - 1] & 0xf;
const code = ((hmacValue[offset] & 0x7f) << 24) |
             ((hmacValue[offset + 1] & 0xff) << 16) |
             ((hmacValue[offset + 2] & 0xff) << 8) |
             (hmacValue[offset + 3] & 0xff);
const hotp = code % (10 ** 6);
console.log(generateSecret())

function verifyTOTP(token, secret, window = 1) {
  if (Math.abs(+window) > 10) {
     console.error('Window size is too large');
     return false;
  }

  for (let errorWindow = -window; errorWindow <= +window; errorWindow++) {
     const totp = generateTOTP(secret, errorWindow);
     if (token === totp) {
        return true;
     }
  }

  return false;
}