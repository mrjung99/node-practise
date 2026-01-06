export function loginController(req, res, next) {
  try {
    const { email, pass } = req.body;
    console.log(email, pass);

    if (email !== "jungdaulat99@gmail.com" || pass !== "jung99") {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const jwtDup = Date.now();
    res.status(200).json({
      success: true,
      message: "Login successful!!",
      data: { email, jwtDup },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "An error occured during login. Try again.",
    });
  }
}
