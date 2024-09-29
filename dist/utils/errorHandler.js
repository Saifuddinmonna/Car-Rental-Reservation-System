// Custom Error Class
class CustomError extends Error {
    statusCode;
    constructor(message, statusCode) {
        console.log('custom error found ');
        super(message);
        this.statusCode = statusCode;
    }
}
// Error Handling Middleware
export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        error: 'Router not found '
    });
    next(err);
};
export default CustomError;
//# sourceMappingURL=errorHandler.js.map