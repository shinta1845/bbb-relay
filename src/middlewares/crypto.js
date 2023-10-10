const crypto = require('crypto');

const generateSalt = () => {
    return crypto.randomBytes(16).toString('hex');
}

const encryptPassword = (password, salt) => {
    return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');;
}

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

module.exports = {
    generateSalt,
    encryptPassword,
    generateAuthToken
}