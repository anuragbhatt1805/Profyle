import { PORT, APP_NAME } from "./src/constant.js";

import server from "./src/server.js";

import { connectDB } from "./src/config/db.js";
import listRoutes from "./src/config/api-list.js";
import { buildLogger } from "./src/config/logger.js";

// Initialize logger for database operations
const logger = buildLogger();

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      logger.info(`${APP_NAME} API is running on port ${PORT}`);
      listRoutes();
    });
  })
  .catch((error) => {
    logger.error("Failed to connect to the database:", error);
  });
