// const Cryptr = require('cryptr')
// const cryptr = new Cryptr('myTotalySecretKey')

// const encryptedString = cryptr.encrypt('mystring')
// const decryptedString = cryptr.decrypt(encryptedString)

// console.log(encryptedString) // e7b75a472b65bc4a42e7b3f78833a4d00040beba796062bf7c13d9533b149e5ec3784813dc20348fdf248d28a2982df85b83d1109623bce45f08238f6ea9bd9bb5f406427b2a40f969802635b8907a0a57944f2c12f334bd081d5143a357c173a611e1b64a
// console.log(decryptedString) // bacon
const crypto = require('crypto')
const base32 = require('hi-base32')
function generateSecret(length = 20) {
  const randomBuffer = crypto.randomBytes(length)
  return base32.encode(randomBuffer).replace(/=/g, '')
}
function generateHOTP(secret, counter) {
  const decodedSecret = base32.decode.asBytes(secret)
  const buffer = Buffer.alloc(8)
  for (let i = 0; i < 8; i++) {
    buffer[7 - i] = counter & 0xff
    counter = counter >> 8
  }

  // Step 1: Generate an HMAC-SHA-1 value
  const hmac = crypto.createHmac('sha1', Buffer.from(decodedSecret))
  hmac.update(buffer)
  const hmacResult = hmac.digest()

  // Step 2: Generate a 4-byte string (Dynamic Truncation)
  const code = dynamicTruncationFn(hmacResult)

  // Step 3: Compute an HOTP value
  return code % 10 ** 6
  // console.log()
  //console.log(buffer)
}

function dynamicTruncationFn(hmacValue) {
  const offset = hmacValue[hmacValue.length - 1] & 0xf

  return (
    ((hmacValue[offset] & 0x7f) << 24) |
    ((hmacValue[offset + 1] & 0xff) << 16) |
    ((hmacValue[offset + 2] & 0xff) << 8) |
    (hmacValue[offset + 3] & 0xff)
  )
}
// function generateSecret(length = 30) {
//   const randomBuffer = crypto.randomBytes(length)
//   return base32.encode(randomBuffer).replace(/=/g, '')
// }
// console.log(generateSecret())
function generateTOTP(secret, window = 0) {
  const counter = Math.floor(Date.now() / 30000)
  // console.log(counter + window)
  return generateHOTP(secret, counter + window)
}

//generateTOTP('JCABJCLG7MVFUC2X453WSBM3JVRFDYLMCWQWL7TNAXXQGDKS')
//console.log(generateSecret())
//all connecyted apps will have different key in local
//when adding apps send me this key I will encrypt and store in db

//cowin has this secret key store in local
//aadhar has this secret key in local

//generateTOTP('JCABJCLG7MVFUC2X453WSBM3JVRFDYLMCWQWL7TNAXXQGDKS')
function verifyTOTP(token, secret, window = 1) {
  if (Math.abs(+window) > 10) {
    console.error('Window size is too large')
    return false
  }
  let c = 1
  for (let errorWindow = -window; errorWindow <= +window; errorWindow++) {
    const totp = generateTOTP(secret, errorWindow)
    // console.log(`#attempt ${c++}`)
    console.log(token + ' ' + totp)
    if (token == totp) {
      return true
    }
  }

  return false
}
console.log(
  verifyTOTP('209007', 'JCABJCLG7MVFUC2X453WSBM3JVRFDYLMCWQWL7TNAXXQGDKS'),
)
