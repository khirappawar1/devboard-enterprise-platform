exports.health = (req, res) => {
  res.status(200).json({
    status: "UP",
    application: "DevBoard Backend",
    version: "1.0.0"
  });
};