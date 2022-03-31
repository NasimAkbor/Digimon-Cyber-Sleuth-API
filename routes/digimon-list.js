import { Router } from "express";
import * as controllers from "../controllers/digimon-list.js";

const router = Router();

router.get("/digimon", controllers.getDigimon);
router.get("/digimon/:name", controllers.getDigimonName);
router.get("/digimon/:stage", controllers.getDigimonStage);
router.get("/digimon/:attribute", controllers.getDigimonAttribute);
router.get("/digimon/:number", controllers.getDigimonNumber);
router.post("/digimon", controllers.createDigimon);
router.put("/digimon/:name", controllers.updateDigimon);
router.delete("/digimon/:name", controllers.deleteDigimon);

export default router;
