const crypto = require('crypto');

const hashPassword = (password) => {
    const salt = crypto.randomBytes(16);
    const hash = crypto.pbkdf2(password, salt, 310000, 32, 'sha512', async function (err, hashPassword) {
        if (err) throw err;
        return hashPassword;
    });
    return hash;
}

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

module.exports = {
    getHashedPassword,
    generateAuthToken,
    hashPassword
}