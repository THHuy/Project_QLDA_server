const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json()); // Để parse body request
const route = require("./router");
route(app);
// Start the server
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
