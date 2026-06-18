import { ArtifactModel } from "../models/artifact.model";
import { Artifact } from "../types/artifact";

export const findAllArtifacts = async (): Promise<Artifact[]> => {
    return await ArtifactModel.find();
};

export const createArtifactInDB = async (data: Artifact): Promise<Artifact> => {
    const artifact = new ArtifactModel(data);
    return await artifact.save();
};