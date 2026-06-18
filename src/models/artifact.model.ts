import { Schema, model } from "mongoose";
import { Artifact } from "../types/artifact";

const artifactSchema = new Schema<Artifact>(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: "Character",
        },
    },
    {
        timestamps: true,
    }
);

export const ArtifactModel = model<Artifact>(
    "Artifact",
    artifactSchema
);