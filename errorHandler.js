module.exports = (err, req, res, next) => {
    console.error(err.stack);
  
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something is wrong on the server';
  
    res.status(statusCode).json({
      status: 'error',
      message,
      error: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  };