import expressListRoutes from "express-list-routes";

import app from "../server.js";

const listRoutes = () => {
    console.log("Listing all routes:");
    expressListRoutes(app, { color: 'green', showController: true, showMethod: true });
}

export default listRoutes;
