import { Router } from "express";
import { getAllArtifactsHandler, createArtifactHandler } from "../controllers/artifact.controller";

const router = Router();

router.get("/", getAllArtifactsHandler);
router.post("/", createArtifactHandler);

export default router;