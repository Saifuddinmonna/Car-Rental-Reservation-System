import jwt from 'jsonwebtoken';
// Rename `authMiddleware` to `isAuthenticated`
export const isAuthenticated = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    if (!token)
        return res.status(401).send({ message: 'Access denied. No token provided.' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(400).send({ message: 'Invalid token.' });
        console.log(err);
    }
};
// Rename `adminMiddleware` to `isAdmin`
export const isAdmin = (req, res, next) => {
    var _a;
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== 'admin') {
        return res.status(403).send({ message: 'Access denied. Admins only.' });
    }
    next();
};
//# sourceMappingURL=authMiddleware.js.map