exports.getDeployments = (req, res) => {
  res.json([
    {
      name: "frontend",
      replicas: 2,
      available: 2
    },
    {
      name: "backend",
      replicas: 2,
      available: 2
    }
  ]);
};