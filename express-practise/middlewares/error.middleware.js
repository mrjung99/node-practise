export function errorHandler(err, req, res) {
  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Internal server error!!",
    errors: err.errors || null,
  });
}
