const sha512 = require('sha512');
module.exports = { //eksporeterer dette fra fila
    hash: str => sha512(str).toString('hex')
};

