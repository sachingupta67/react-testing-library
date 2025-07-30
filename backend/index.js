// server.js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const USERS = [
  {
    name: "User 1",
    id: "1",
  },
  {
    name: "User 2",
    id: "2",
  },
  {
    name: "User 3",
    id: "3",
  },
  {
    name: "User 4",
    id: "4",
  },
  {
    name: "User 5",
    id: "5",
  },
];

app.get("/api/users", async (req, res) => {
  res
    .json({ data: USERS, message: "User list fetched successfully" })
    .status(200);
});

app.listen(PORT, () => {
  console.log(`🌍 Server running at http://localhost:${PORT}`);
});
