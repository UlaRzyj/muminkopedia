import { Router } from "express";
import {
    getAllCharacters,
    createCharacterHandler
} from "../controllers/character.controller";

const router = Router();

router.get("/", getAllCharacters);
router.post("/", createCharacterHandler);

export default router;