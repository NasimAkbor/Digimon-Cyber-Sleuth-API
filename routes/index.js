import { Router } from "express";
import digiRoutes from "./digimon-list.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", digiRoutes);

export default router;
