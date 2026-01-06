export function validateLogin(req, res, next) {
  const { email, pass } = req.body;

  const errors = [];
  if (!email) errors.push({ field: "email", message: "Email is required." });

  if (!pass)
    errors.push({ field: "password", message: "Password is required." });

  if (errors.length > 0) {
    return res
      .status(400)
      .json({ success: false, message: "Validation failed!!", errors });
  }

  next();
}
