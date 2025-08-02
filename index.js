import { PORT, APP_NAME } from "./src/constant.js";

import server from "./src/server.js";

import { connectDB } from "./src/config/db.js";

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`${APP_NAME} API is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });
