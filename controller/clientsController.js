const Client = require("../Models/clients");

exports.getAllClients = async (req, res) => {
  try {
    let clients = await Client.find();
    if (clients.length === 0) {
      // Add a default client if none exist
      const newClient = new Client({
        firstName: "Gilad",
        lastName: "Yitzhak",
        Phone: "0584226734",
      });
      await newClient.save();
      clients = await Client.find();
    }
    res.status(200).json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.getBlockUpdate = async (req, res) => {
  const user = req.params.user || "unknown user";
  res.status(200).json({
    message: `Block will be updated for ${user}`,
  });
};
