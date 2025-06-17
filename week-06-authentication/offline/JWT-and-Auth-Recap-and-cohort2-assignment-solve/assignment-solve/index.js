const jwt = require('jsonwebtoken');
const zod = require("zod");

const jwtPassword = "secret";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({
        username
    }, jwtPassword);

    return signature;
}

function verifyJwt(token) {
    let ans = true;
    try {
       jwt.verify(token, jwtPassword);
    } catch(e) {
       ans = false;
    }
    return ans;
}

function decodeJwt(token) {
    // true, false
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

console.log(signJwt("shriyansh@gmail.com","123123"));
console.log(decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNocml5YW5zaEBnbWFpbC5jb20iLCJpYXQiOjE3NTAwNTcxNDN9._H2R69-M90hM-kqlxGf6-Ak1q5aYZXmPt4syC5HZtj0"));
console.log(verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNocml5YW5zaEBnbWFpbC5jb20iLCJpYXQiOjE3NTAwNTcxNDN9._H2R69-M90hM-kqlxGf6-Ak1q5aYZXmPt4syC5HZtj0"));
