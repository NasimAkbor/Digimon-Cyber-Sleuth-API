import { Router } from "express";
import * as controllers from "../controllers/digimon-list.js";

const router = Router();
//Router that determines what method is called when a certain link is sent a request
router.get("/digimon", controllers.getDigimon);
router.get("/digimon/name/:name", controllers.getDigimonName);
router.get("/digimon/stage/:stage", controllers.getDigimonStage);
router.get("/digimon/att/:attribute", controllers.getDigimonAttribute);
router.get("/digimon/num/:num", controllers.getDigimonNumber);
router.post("/digimon", controllers.createDigimon);
router.put("/digimon/name/:name", controllers.updateDigimon);
router.delete("/digimon/name/:name", controllers.deleteDigimon);

export default router;
