import express from "express";
const router = express.Router();

import userRoutes from "./userRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import productRoutes from "./productRoutes.js";
import uploadRoutes from "./uploadRoutes.js";
import orderRoutes from "./orderRoutes.js";

const app = express();
app.use("/users", userRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use("/upload", uploadRoutes);
app.use("/orders", orderRoutes);

export default router;
