const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).json({ message: 'Unauthorized - No Token Provided' });

    // Extract only the token (remove "Bearer ")
    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized - Token Missing' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid Token', error: error.message });
    }
};

module.exports = authMiddleware;
