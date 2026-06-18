import { Request, Response } from "express";
import { getAllArtifacts, createArtifact } from "../services/artifact.service";

export const getAllArtifactsHandler = async (req: Request, res: Response) => {
    try {
        const data = await getAllArtifacts();
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Unknown error"
        });
    }
};

export const createArtifactHandler = async (req: Request, res: Response) => {
    try {
        const artifact = await createArtifact(req.body);
        res.status(201).json({ success: true, data: artifact });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error instanceof Error ? error.message : "Unknown error"
        });
    }
};