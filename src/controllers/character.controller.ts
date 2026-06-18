import { Request, Response } from "express";
import {
    getAllCharacters as getAllCharactersService,
    createCharacter as createCharacterService
} from "../services/character.service";

export const getAllCharacters = async (req: Request, res: Response) => {
    try {
        const data = await getAllCharactersService();

        res.json({
            success: true,
            data
        });

    } catch (error) {
        console.error("ERROR:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch characters",
            error: error instanceof Error ? error.message : error
        });
    }
};

export const createCharacterHandler = async (req: Request, res: Response) => {
    try {
        const character = await createCharacterService(req.body);

        res.status(201).json({
            success: true,
            data: character
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Unknown error"
        });
    }
};