import { Artifact } from "../types/artifact";
import { findAllArtifacts, createArtifactInDB } from "../repositories/artifact.repository";

export const getAllArtifacts = async (): Promise<Artifact[]> => {
    return await findAllArtifacts();
};

export const createArtifact = async (data: Artifact): Promise<Artifact> => {
    if (!data.name.trim()) {
        throw new Error("Artifact name is required");
    }
    return await createArtifactInDB(data);
};