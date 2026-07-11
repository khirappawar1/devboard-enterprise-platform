exports.getNodes = (req, res) => {
  res.json([
    {
      name: "control-plane",
      status: "Ready"
    },
    {
      name: "worker-1",
      status: "Ready"
    },
    {
      name: "worker-2",
      status: "Ready"
    },
    {
      name: "worker-3",
      status: "Ready"
    }
  ]);
};