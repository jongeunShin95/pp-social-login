const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.decode(token);

        if (decoded) next();
        else res.status(401).json({ error: 'unauthorized' });
    } catch (err) {
        res.status(401).json({ error: 'token expired' });
    }
}

exports.auth = auth;