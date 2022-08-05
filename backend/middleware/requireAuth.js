const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    const token = authorization.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id).select("_id");
        next();
    }
    catch (err) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

}

module.exports = requireAuth;