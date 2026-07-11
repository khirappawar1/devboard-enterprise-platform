exports.getPods = (req, res) => {
  res.json([
    {
      name: "frontend",
      namespace: "devboard",
      status: "Running"
    },
    {
      name: "backend",
      namespace: "devboard",
      status: "Running"
    },
    {
      name: "postgres",
      namespace: "database",
      status: "Running"
    }
  ]);
};