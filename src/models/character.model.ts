import { Schema, model } from "mongoose";
import { Character } from "../types/character";

const characterSchema = new Schema<Character>(
    {
        name: {
            type: String,
            required: [true, "Character must have a name"],
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        species: {
            type: String,
            required: true,
        },

        isHibernating: {
            type: Boolean,
            default: false,
        },

        bestFriend: {
            type: Schema.Types.ObjectId,
            ref: "Character",
        },
    },
    {
        timestamps: true,
    }
);

export const CharacterModel = model<Character>(
    "Character",
    characterSchema
);